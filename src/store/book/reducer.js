import {types} from './'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  books: [],
  book: {},
  comments: [],
  like: false,
  likeCount: 0
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.SET_BOOKS:
      return state.set('books', actions.payload)
    case types.SET_BOOK:
      return state.set('book', actions.payload)
    case types.SET_COMMENTS:
      return state.set('comments', actions.payload)
    case types.SET_LIKE:
      return state.set('like', actions.payload)
    case types.SET_LIKECOUNT:
      return state.set('likeCount', actions.payload)
    default:
      return state
  }
}