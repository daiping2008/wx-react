import {fromJS} from 'immutable'
import {types} from './index'
const defaultState = fromJS({
  classic: {},
  like: 0,
  likeCount: 0
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.SET_CLASSIC:
      return state.set('classic', actions.payload)
    case types.SET_LIKE:
      return state.set('like', actions.payload)
    case types.SET_LIKECOUNT:
        return state.set('likeCount', actions.payload)  
    default:
      return state
  }
}