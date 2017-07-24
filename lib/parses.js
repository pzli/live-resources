var cheerio = require('cheerio');
var _ = require('lodash');


function douyuParse(datas, param) {
  var $;

  try{
    $ = cheerio.load(datas.body);
  }catch(e){
    return [];
  }

  var room, rooms = [];
  $('#live-list-contentbox li').each(function(index, el) {
    var _view = $(el).find('span.dy-num').text();
    if(_view.indexOf('万') > -1 ) _view = parseFloat(_view)*10000;
    if(_view < 600) return;
    var room = {
      roomId: $(el).data('rid'),
      type: param,
      title: $(el).find('h3').text().trim(),
      viewNumber: parseFloat(_view),
      view: $(el).find('span.dy-num').text(),
      platform: 'douyu',
      live: true,
      anchor: $(el).find('span.dy-name').text(),
      cover: $(el).find('img[data-original]').data('original'),
    }

    rooms.push(room)
  });

  return rooms;
}

function huyaParse(datas, param) {
  var data;
  try{
    data = JSON.parse(datas.body);
  }catch(e){
    return [];
  }
  if(data.status !== 200) return [];
  var room, rooms = [];
  _.each(data.data.datas, (el, index) => {
    var _view = parseFloat(el.totalCount);
    if(_view < 100) return;
    var _live = true;

    room = {
      roomId: el.privateHost,
      type: param,
      title: el.roomName,
      viewNumber: _view,
      view: (_view / 10000).toFixed(1) + '万',
      platform: 'huya',
      live: _live,
      anchor: el.nick,
      cover: el.screenshot,
    }
    rooms.push(room);
  })

  return rooms;
}


exports.douyuParse = douyuParse;
exports.huyaParse = huyaParse;