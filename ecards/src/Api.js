import axios from 'axios'

const request = axios.create({
  baseURL: 'https://brown-shoe.herokuapp.com/api/'
})

export function getToken (username, password) {
  return request.post('/auth/token/login', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export function getCards (token) {
  return request.get('/cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log(res.data.results)
    return res.data.results
  })
}

export function getUsersCards (token) {
  return request.get('/cards/my_cards', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log(res.data)
    return res.data
  })
}

export function getUsersInfo (token) {
  return request.get('/user/info', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    console.log(res.data)
    return res.data
  })
}
