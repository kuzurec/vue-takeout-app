import axios from 'axios'

export function get (url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const data = res.data
      if (data.code === 0) {
        return data.data
      }
    }).catch(() => {})
  }
}

export function post (url) {
  return function (params) {
    return axios.post(url, params).then((res) => {
      const data = res.data
      if (data.code === 0) {
        return data.data
      }
    }).catch(() => {})
  }
}

export function getCookie (name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return decodeURIComponent(arr[2])
  } else {
    return null
  }
}
