import axios from 'axios'

const instance = axios.create()

const token =localStorage.getItem('token')
console.log(token)
instance.defaults.headers.common['Authorization'] = token

// instance.defaults.headers.common['Authorization'] = window.btoa('fe29870bb21e908416bc104e84aa56b134dcf8b5' + ':' +'85e28b28d476d2d336f96901b3633da38519e24b');

export default instance