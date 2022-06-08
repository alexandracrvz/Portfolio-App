let apiUrl
const apiUrls = {
  production: 'rocky-tor-49981',
  development: 'http://localhost:3000/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl