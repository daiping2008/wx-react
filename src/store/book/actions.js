import {types} from './'
import BookModel from '../../models/book'
import { fromJS } from 'immutable';
const bookModel = new BookModel()

export const setBooks = payload => ({
  type: types.SET_BOOKS,
  payload: fromJS(payload)
})

export const setComments = payload => ({
  type: types.SET_COMMENTS,
  payload: fromJS(payload)
})

export const setBook = payload => ({
  type: types.SET_BOOK,
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

export const getHotList = () => {
  return dispatch => {
    bookModel.getHotList().then(res => {
      dispatch(setBooks(res))
    })
  }
}

export const loadData = ({id}) => {
  return dispatch => {
    bookModel.getBookComment(id).then(res=>{
      dispatch(setComments(res.comments))
    })
    bookModel.getBookDetail(id).then(res=>{
      dispatch(setBook(res))
    })
    bookModel.getBookFavor(id).then(res=>{
      dispatch(setLike(!!res.like_status))
      dispatch(setLikeCount(res.fav_nums))
    })
  }
}