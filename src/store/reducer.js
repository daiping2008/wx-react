import { combineReducers } from 'redux-immutable'
import { reducer as classicReducer} from './classic'

export default combineReducers({
  classic: classicReducer
})