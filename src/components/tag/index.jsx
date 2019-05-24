import React from 'react'

import './style.scss'

class Tag extends React.Component {

  render() {
    return (
      <div className='tag-wrapper'>
        <span>{this.props.data}</span>
        <span>{this.props.children}</span>
      </div>
    )
  }
}

export default Tag