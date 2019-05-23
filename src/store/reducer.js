import { combineReducers } from 'redux'
import { reducer as classicReducer} from './classic'

export default combineReducers({
  classic: classicReducer
})