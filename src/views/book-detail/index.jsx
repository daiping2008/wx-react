import React from 'react'
import {connect} from 'react-redux'

import {actions} from '../../store/book'
import {format} from '../../utils/tool'

import Tag from '../../components/tag'

import './style.scss'


@connect(
  state => {
    return {
      book: state.get('book').get('book').toJS(),
      comments: state.get('book').get('comments').toJS(),
      like: state.get('book').get('like'),
      likeCount: state.get('book').get('likeCount')
    }
  },
  dispatch => {
    return {
      loadData({id}) {
        dispatch(actions.loadData({id}))
      }
    }
  }
)
class BookDetail extends React.Component {
  
  render() {
    const { book } = this.props
    return (
      <div className='book-detail-container'>
        <div className='header'>
          <img src={book.image} alt=""/>
          <div className='title'>{book.title}</div>
          <div className='author'>{book.author}</div>
        </div>

        <div className='sub-container'>
          <div className='sub-title'>短评</div>
          <div className='tag-container'>
            {
              this.renderTags()
            }
          </div>
        </div>

        <div className='sub-container'>
          <div className='sub-title'>内容简介</div>
          <div className='summary' dangerouslySetInnerHTML={{ __html: format(book.summary) }}/>
        </div>

        <div className='sub-container'>
          {
            this.renderBookInfo()
          }
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { bid } = this.props.match.params
    this.loadData(bid)
  }

  loadData(id) {
    this.props.loadData({id})
  }

  renderTags() {
    const { comments } = this.props
    return (
      comments.map(v => {
        return (
          <div className='tag' key={v.content + v.nums}>
            <Tag className='1' data={v.content}>
              <span>+{v.nums}</span>
            </Tag>
          </div>
        )
      })
    )
  }

  renderBookInfo() {
    const { book } = this.props
    return (
      <div className='detail-container'>
        <div className="detail-item">
          <div className="name">出版社：</div>
          <div>{book.publisher}</div>
        </div>
        <div className="detail-item">
          <div className="name">出版年：</div>
          <div>{book.pubdate}</div>
        </div>
        <div className="detail-item">
          <div class="name">页数：</div>
          <div>{book.pages}</div>
        </div>
        <div className="detail-item">
          <div className="name">定价：</div>
          <div>{book.price}</div>
        </div>
        <div className="detail-item">
          <div className="name">装订：</div>
          <div>{book.binding}</div>
        </div>
      </div>
    )
  }
}

export default BookDetail