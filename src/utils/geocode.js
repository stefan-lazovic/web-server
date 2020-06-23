const request = require('request');

const geocode = (address, callback) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${address}`
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback('unable to connect', undefined)
    } else {
      callback(undefined, res.body)
    }
  })
}

module.exports = geocode
