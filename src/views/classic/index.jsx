import React from 'react'
import {connect} from 'react-redux'
@connect(
  state => {
    return {
      count: state.get('classic').get('count')
    }
  }
, {})
class Classic extends React.Component {
  render() {
    return  (
      <div>{this.props.count}</div>
    )
  }
}

export default Classic