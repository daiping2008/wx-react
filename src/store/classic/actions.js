import  {types} from './'
import {fromJS} from 'immutable'
import ClassicModel from '../../models/classic'
import LikeModel from '../../models/like'
const classicModel = new ClassicModel()
const likeModel = new LikeModel()

export const setClassic = (payload) => ({
  type: types.SET_CLASSIC,
  payload: fromJS(payload)
})

export const setLike = payload => ({
  type: types.SET_LIKE,
  payload: fromJS(payload)
})

export const setLikeCount = payload => ({
  type: types.SET_LIKECOUNT,
  payload: fromJS(payload)
})

export const setLatest = payload => ({
  type: types.SET_LATEST,
  payload: fromJS(payload)
})

export const setFirst = payload => ({
  type: types.SET_FIRST,
  payload: fromJS(payload)
})

export const getClassicLatest = () => {
  return dispatch => {
    classicModel.getClassicLatest().then(res => {
      dispatch(setLike(!!res.like_status))
      dispatch(setLikeCount(res.fav_nums))
      dispatch(setClassic(res))
    })
  }
}

export const handleLike = ({like, likeCount, id, category}) => {
  return dispatch => {
    const behavior = !like ? 'like' : 'cancel'
    likeModel.like({behavior, id, category}).then(res => {
      dispatch(setLike(!like))
      dispatch(setLikeCount(!like ? (likeCount + 1) : (likeCount - 1)))
    })
  }
}

export const getCurrentClassic = (index, nextOrPrev) => {
  return dispatch => {
    classicModel.getCurrentClassic(index, nextOrPrev)
      .then(res => {
        dispatch(setClassic(res))
        dispatch(setLatest(classicModel.isLatest(res.index)))
        dispatch(setFirst(classicModel.isFirst(res.index)))
      })
  }
}