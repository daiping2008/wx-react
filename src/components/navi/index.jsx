import React from 'react'

import './style.scss'

class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftSrc: require('./triangle@left.png'),
      disLeftSrc: require('./triangle.dis@left.png'),
      rightSrc: require('./triangle@right.png'),
      disRightSrc: require('./triangle.dis@right.png')
    }
    this.handleLeft = this.handleLeft.bind(this)
    this.handleRight = this.handleRight.bind(this)
  }
  render () {
    const { latest, first, content } = this.props
    const { leftSrc, disLeftSrc, rightSrc, disRightSrc } = this.state
    return (
      <div className='navi-wrapper'>
        <img className='icon' src={latest ? disLeftSrc : leftSrc} onClick={this.handleLeft} alt=""/>
        <div className='title'>{content}</div>
        <img className='icon' src={first ? disRightSrc : rightSrc} onClick={this.handleRight} alt=""/>
      </div>
    )
  }
  handleLeft() {
    const { latest } = this.props
    if (latest) return

    this.props.onNext()
  }

  handleRight() {
    const { first } = this.props
    if (first) return

    this.props.onPrev()
  }
}

export default Navi