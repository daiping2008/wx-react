import HTTP from '../utils/http'

class ClassicModel extends HTTP{
  getClassicLatest() {
    return this.request({
      url: '/classic/latest'
    })
  }
}

export default ClassicModel