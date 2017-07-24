let resourceEnginer = require('./lib/resources');
var platformConfig = require('./lib/platform');
let async = require('async');

function autoFetch(fetchResultData) {

  let params = [];

  platformConfig.gameType.map( category => params.push(category.name) )

  async.forever(next => {
    fn(() => setTimeout(() => {
      console.log(fetchResultData)
      next(null)
    }, 90 * 1000))
  }, err => {
    console.log(err)
  })

  function fn(cb) {
    async.eachLimit(params, 1, (name, callback) => {
        return resourceEnginer(name, fetchResultData, callback)
    })
    return cb()
  }



}
module.exports = autoFetch;