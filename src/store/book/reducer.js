import {types} from './'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  books: []
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.SET_BOOKS:
      return state.set('books', actions.payload)
    default:
      return state
  }
}