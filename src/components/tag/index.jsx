import React from 'react'

import './style.scss'

class Tag extends React.Component {

  constructor(props) {
    super(props)
    this.onTapping = this.onTapping.bind(this)
  }

  render() {
    return (
      <div onClick={this.onTapping} className='tag-wrapper'>
        <span>{this.props.data}</span>
        <span>{this.props.children}</span>
      </div>
    )
  }

  onTapping() {
    this.props.onTapping({ value: this.props.data })
  }
}

export default Tag