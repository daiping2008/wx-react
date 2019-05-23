import React from 'react'

import '../style.scss'
import './style.scss'

class Music extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      pauseSrc: require('./player@waitting.png'),
      playSrc: require('./player@playing.png')
    }
  }

  render () {
    const { playing, playSrc, pauseSrc } = this.state
    const { data } = this.props
    return (
      <div className='music-wrapper'>
        <img className='img' src={data.image} alt=""/>
        <img className='player-img' src={playing?playSrc:pauseSrc} alt=""/>
        <img className='tag' src={require('./music@tag.png')} alt=""/>
        <div className='content'>{data.content}</div>
      </div>
    )
  }
}

export default Music