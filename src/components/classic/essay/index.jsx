import React from 'react'

import '../style.scss'

class Essay extends React.Component {
  render () {
    const { data } = this.props
    return (
      <div className='essay-wrapper'>
        <img className='img' src={data.image} alt=""/>
        <img className='tag' src={require('./essay@tag.png')} alt=""/>
        <div className='content'>{data.content}</div>
      </div>
    )
  }
}

export default Essay