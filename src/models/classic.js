import HTTP from '../utils/http'

class ClassicModel extends HTTP{
  key = 'react-latest-index'
  getClassicLatest() {
    return this.request({
      url: '/classic/latest'
    }).then(res => {
      this._saveLatestIndex(res.index)
      this._saveClassic(res.index, res)
      return Promise.resolve(res)
    })
  }

  getCurrentClassic(index, nextOrPrev) {
    const next = nextOrPrev === 'next' ? 'next' : 'previous'
    const classic = nextOrPrev === 'next' ?
      this._getClassic(index+1) : this._getClassic(index-1)
    if (!classic) {
      return this.request({
        url: `/classic/${index}/${next}`
      }).then(res => {
        this._saveClassic(res.index, res)
        return Promise.resolve(res)
      })
    } else {
      return Promise.resolve(classic)
    }
   
  }

  isLatest(index) {
    return parseInt(this._getLatestIndex()) === index
  }

  isFirst(index) {
    return 1 === index
  }

  _saveLatestIndex(index) {
    window.localStorage.setItem(this.key, index)
  }

  _getLatestIndex() {
    return window.localStorage.getItem(this.key)
  }

  _saveClassic(index, payload) {
    window.localStorage.setItem(this._getKey(index), JSON.stringify(payload))
  }

  _getClassic(index) {
    return JSON.parse(window.localStorage.getItem(this._getKey(index)))
  }

  _getKey(index) {
    return 'react-classic-' + index
  }

}

export default ClassicModel