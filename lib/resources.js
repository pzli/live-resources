const _ = require('lodash');
const async = require('async');
const request = require('request');
let platformConfig = require('./platform');
let platforms = platformConfig.platforms;
let parses = require('./parses')

function fetchEngineer(param, obj, callback) {
	let tasks = _.map(platforms, platform => {
		let _url = preFixUrl(platform, param);
		return (cb) => fetchPlatform(_url,  cb);
	})

	async.parallel(tasks, (err, results) => {
		let datas = _.flatten(switchParse(results, param), true);
	    if(datas.length == 0) return callback(null, null);

		let result = _.reverse(_.sortBy(datas, 'viewNumber'));
	    obj[param] = result;
	    return callback(null, result);		
	})
}

function switchParse(results, param) {
	let datas = [];

	_.map(platforms, (platform, index) => {

      	return datas.push(eval(`parses.${platform.name}Parse(results[index], param)`));

  	})

	return datas;
}

function preFixUrl(platform, param) {
	if (platform.name == 'douyu') {
		if (param == 'all') {
			return `http://www.douyu.com/directory/all`
		}
		if(param == 'wow') {
	      return `${platform.href}WOW`
	    }
	    if(param == 'hok') {
	      return `${platform.href}wzry`
	    }    
	    if(param == 'hearthstone') {
	      return `${platform.href}How`
	    }
	}

	if (platform.name == 'huya') {
		if (param == 'all') {
			return `${platform.href}0`
		}
		if (param == 'werewolf') {
			return `${platform.href}2774`
		}
		if(param == 'lol') {
	      	return `${platform.href}1`
	    }
		if(param == 'wow') {
	      	return `${platform.href}8`
	    }
	    if(param == 'dota2') {
	    	return `${platform.href}7`
	    }    
	    if(param == 'tvgame') {
	      	return `${platform.href}1964`
	    }
	    if(param == 'hearthstone') {
	      	return `${platform.href}393`
	    }
	    if(param == 'overwatch') {
	      	return `${platform.href}2174`
	    }
	    if(param == 'hok') {
	      	return `${platform.href}2336`
	    }
	}

	return `${platform.href}${param}`;
}

function fetchPlatform(url, cb) {
	if(url == '') return cb(null, null);

	let option = {
		url,
		headers: {
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
		}
	};

	request(option, (err, res, body) => {
		if(err) {
			console.log(err, url);
			cb(null, null);
		}
		cb(null, res);
	})

}

module.exports = fetchEngineer;