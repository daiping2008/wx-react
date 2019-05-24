import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.scss'

@withRouter
class Book extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const { data } = this.props
    if (!data) return null
    return (
      <div onClick={this.handleClick} className='book-wrapper'>
        <img src={data.image} alt=""/>
        <div className='desc'>
          <div className='title'>{data.title}</div>
          <div className='autor'>{data.author}</div>
          <div className="footer">{data.fav_nums} 喜欢</div>
        </div>
      </div>
    )
  }

  handleClick() {
    console.log(1)
    this.props.history.push(`/book-detail/${this.props.data.id}`)
  }
}

export default Book