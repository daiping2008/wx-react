import { combineReducers } from 'redux-immutable'
import { reducer as classicReducer } from './classic'
import { reducer as bookReducer } from './book'

export default combineReducers({
  classic: classicReducer,
  book: bookReducer
})