import React from 'react'

import '../style.scss'

class Movie extends React.Component {
  render () {
    const { data } = this.props
    return (
      <div className='movie-wrapper'>
        <img className='img' src={data.image} alt=""/>
        <img className='tag' src={require('./movie@tag.png')} alt=""/>
        <div className='content'>{data.content}</div>
      </div>
    )
  }
}

export default Movie