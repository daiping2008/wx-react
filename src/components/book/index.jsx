import React from 'react'

import './style.scss'

class Book extends React.Component {
  render () {
    const { data } = this.props
    if (!data) return null
    return (
      <div className='book-wrapper'>
        <img src={data.image} alt=""/>
        <div className='desc'>
          <div className='title'>{data.title}</div>
          <div className='autor'>{data.author}</div>
          <div className="footer">{data.fav_nums} 喜欢</div>
        </div>
      </div>
    )
  }
}

export default Book