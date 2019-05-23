import React from 'react'

import './style.scss'
class Episode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      month: 0,
      year: 0
    }
  }
  componentDidMount() {
    const { months } = this.state
    const date = new Date()
    this.setState({
      year: date.getFullYear(),
      month: months[date.getMonth()]
    })
  }
  render () {
    const { month, year } = this.state
    const { index } = this.props
    return (
      <div className='episode-wrapper'>
        <div className='index-wrapper'>
          <div className='plain'>No.</div>
          <div className='index'>{index}</div>
          <div className='line'></div>
        </div>
        <div className='date-wrapper'>
          <div className='month'>{month}</div>
          <div className='year'>{year}</div>
        </div>
      </div>
    )
  }
}

export default Episode