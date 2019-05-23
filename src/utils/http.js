import axios from 'axios'

class HTTP {
  request({url, data = {}, method = 'GET'}) {
    return new Promise((resolve, reject) => {
      axios({
        url,
        data,
        method,
        headers: {
          'content-type':'application/json',
          'appkey': 'RdshydjBvcYZhMZC'
        }
      }).then(res => {
        // 暂时不处理错误情况
        const { data } = res
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default HTTP