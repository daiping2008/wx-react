import React from 'react'
import './style.scss'
class Like extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likeSrc: require('./like.png'),
      unLikeSrc: require('./like@dis.png')
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    const { likeSrc, unLikeSrc } = this.state
    const { like, likeCount } = this.props
    return (
      <div className='like-wrapper'>
        <img onClick={this.handleClick} className='img' src={ like ? likeSrc : unLikeSrc } alt=""/>
        <span className='count'>{likeCount}</span>
      </div>
    )
  }
  handleClick() {
    this.props.handleLike()
  }
}

export default Like