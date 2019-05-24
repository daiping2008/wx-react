import React from 'react'
import {connect} from 'react-redux'

import {actions} from '../../store/book'
import {format} from '../../utils/tool'

import Tag from '../../components/tag'
import Like from '../../components/like'
import Mask from '../../components/mask'

import './style.scss'

import BookModel from '../../models/book'
const bookModel = new BookModel()

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

  constructor(props) {
    super(props)

    this.state = {
      posting: false,
      q: ''
    }
    this.onFakePost = this.onFakePost.bind(this)
    this.cancel = this.cancel.bind(this)
    this.onTapping = this.onTapping.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  render() {
    const { posting } = this.state
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
      
        {/* 评论 */}
        {
          !posting ? this.renderPost() : ''
        }
        {
          posting ? this.renderPosting() : ''
        }
        {
          posting ? <Mask/> : ''
        }
        {/* 评论 */}
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
          <div className="name">页数：</div>
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

  renderPost() {
    const { like, likeCount } = this.props
    return (
      <div className='post-container'>
        <div onClick={this.onFakePost} className='post-fake'>
          <div>输入短评</div>
        </div>
        <div className='right-side'>
          <Like like={like} likeCount={likeCount} />
        </div>
      </div>
    )
  }
  renderPosting() {
    const { q } = this.state
    const { comments } = this.props
    return (
      <div className='posting-container'>
        <div className='posting-header'>
          <div>仅可点击标签+1</div>
          <div onClick={this.cancel} className='cancel'>取消</div>
        </div>
        <div className='comment-container'>
          {
            comments.slice(0,3).map(v =>(
                <div className='tag' key={v.content+v.nums}>
                  <Tag onTapping={this.onTapping} data={v.content} />
                </div>
              )
            )
          }
        </div>
        <input value={q} onChange={this.handleChange} onKeyUp={e => this.onKeyUp(e)} className='post' maxLength='12' placeholder='组多12个字符' type="text"/>
      </div>
    )
  }
  onFakePost() {
    this.setState({ posting: true })
  }
  cancel() {
    this.setState({ posting: false })
  }
  onTapping({value}) {
    this.onPost(value)
  }
  onKeyUp(e) {
    if (e.keyCode === 13) {
      const { q } = this.state
      if (!q) return
      if (q.length > 12) return 
      this.onPost(q)
    }
  }
  onPost(content) {
    const { book } = this.props
    bookModel.addShortComment({
      id: book.id,
      content
    }).then(res => {
      this.hidePosting()
    }).catch(err => { this.hidePosting() })
  }
  hidePosting() {
    this.setState({
      posting: false,
      q:''
    })
  }
  handleChange(e) {
    this.setState({ q: e.target.value })
  }
}

export default BookDetail