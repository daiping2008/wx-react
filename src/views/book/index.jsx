import React from 'react'
import {connect} from 'react-redux'
import {actions} from '../../store/book'

import VBook from '../../components/book'

import './style.scss'

@connect(
  state => {
    return {
      books: state.get('book').get('books').toJS()
    }
  },
  dispatch => {
    return {
      getHotList() {
        return dispatch(actions.getHotList())
      }
    }
  }
)
class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='book-container'>
        <div className='header'>
          <div className='search-container'>
            <img src={require('../../assets/images/icon/search.png')} alt=""/>
            <div>搜索书籍</div>
          </div>
        </div>
        <div className='sub-container'>
          <img className='sub-title' src={require('../../assets/images/book/quality.png')} alt=""/>
          <div className='book-container'>
            {
              this.renderHotList()
           }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHotList()
  }

  renderHotList() {
    const { books } = this.props

    return (
      books.map(v => (
        <div key={v.id} className='book-item'>
          <VBook data={v} />
        </div>  
      ))
    )
  }
}

export default Book