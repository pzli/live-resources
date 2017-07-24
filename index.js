const async = require('async');
const fetch = require('isomorphic-fetch');
const _ = require('lodash');
let resourceEnginer = require('./lib/resources');
let platformConfig = require('./lib/platform');

fetchCategorysSrc();
async function fetchCategorysSrc() {
  let stream = await fetch('http://open.douyucdn.cn/api/RoomApi/game');
  let data = await stream.json();
  _.each(data.data, (item) => {
    _.each(platformConfig.gameType, (el) => {
      if(el.name_cn == item.game_name) {
        el.game_src = item.game_src;
      }
    })
  });
}

function autoFetch(fetchResultData) {

  let params = [];

  platformConfig.gameType.map( category => params.push(category.name) )

  async.forever(next => {
    fn(() => setTimeout(() => {
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

module.exports = {
  autoFetch,
  platformConfig
}