import React from 'react'
import {connect} from 'react-redux'
import {actions} from '../../store/classic'

import Like from '../../components/like'
import Episode from '../../components/episode'
import Movie from '../../components/classic/movie'
import './style.scss'
@connect(
  state => {
    return {
      classic: state.get('classic').get('classic').toJS(),
      like: state.get('classic').get('like'),
      likeCount: state.get('classic').get('likeCount')
    }
  }
, dispatch => {
  return {
    getClassicLatest() {
      dispatch(actions.getClassicLatest())
    },
    handleLike(payload) {
      dispatch(actions.handleLike(payload))
    }
  }
})
class Classic extends React.Component {
  constructor(props) {
    super(props)
    this.handleLike = this.handleLike.bind(this)
  }
  render() {
    const { like, likeCount, classic } = this.props
    return  (
      <div className='classic-container'>
        <div className='header'>
          <Episode index={classic.index} />
          <Like handleLike={this.handleLike} like={like} likeCount={likeCount} />
        </div>
        <div className='classsic-main'>
          { this.renderMain() }
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.getClassicLatest()
  }

  renderMain() {
    const { classic } = this.props
    const movie = <Movie data={classic} />

    return movie
  }

  handleLike() {
    const { like, likeCount, classic } = this.props

    this.props.handleLike({
      like,
      likeCount,
      id: classic.id,
      category: classic.type
    })
  }
}

export default Classic