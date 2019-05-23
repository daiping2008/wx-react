import React from 'react'
import {connect} from 'react-redux'
import {actions} from '../../store/classic'

import Like from '../../components/like'

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
    const { like, likeCount } = this.props
    return  (
      <div className='container'>
        <div className='header'>
          <Like handleLike={this.handleLike} like={like} likeCount={likeCount} />
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.getClassicLatest()
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