import {types} from './'
import BookModel from '../../models/book'
import { fromJS } from 'immutable';
const bookModel = new BookModel()

export const setBooks = payload => ({
  type: types.SET_BOOKS,
  payload: fromJS(payload)
})

export const getHotList = () => {
  return dispatch => {
    bookModel.getHotList().then(res => {
      dispatch(setBooks(res))
    })
  }
}