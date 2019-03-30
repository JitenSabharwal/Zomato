const request = require('request')
const apiKey = 'c0d30b0468c2f62d48ff4b14103e9b2b'

/**
 * @param {stirng} url 
 */
const requestZomato = (params) => {
  return new Promise((resolve, reject) => {
    const url = 'search'
    const options = {
      method: 'GET',
      uri: `https://developers.zomato.com/api/v2.1/${url}`,
      qs: params,
      headers: {
        'user-key': apiKey
      }
    }
    request(options,(err, resp, body) => {
      if (err) return reject(err)
      resolve(JSON.parse(body))
    })
  })
}
module.exports = requestZomato