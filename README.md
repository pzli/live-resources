一个爬取各平台直播信息的工具。


### 安装过程

Using npm:
		
	$ npm i --save live-resources
	
In Node.js:

	const resources = require('live-resources');
	let platformConfig = resources.platformConfig;
	let platforms = platformConfig.platforms;
	
	let fetchResultData = {};
	resources.autoFetch(fetchResultData);
	

### 使用介绍

该工具每隔90秒从各个直播平台获取直播信息，并进行相关的数据聚合。

该npm包返回一个对象，存有一个方法和一个包含直播平台和游戏分类信息的对象。

	module.exports = {
	  autoFetch,
	  platformConfig
	}
	
向autoFetch中传入的fetchResultData为存储获得结果的对象，最终得到的数据类型格式如下：

![](http://ww3.sinaimg.cn/large/0060lm7Tgy1fhuxi8f1nvj30py0hrwh7.jpg)

你可以从上述数据中再次组合成你需要的数据合集。

例如：

* 获得每个分类的数目

		let data = _.cloneDeep(platformConfig.gameType);
	    _.each(fetchResultData, (platform, key) => {
		    platformConfig.gameType.forEach((el, index) => {
		        if(key == el.name) {
		            data[index].count = platform.length;
		        }
		    })
		})
		
![](http://ww3.sinaimg.cn/large/0060lm7Tgy1fhv0u6c43yj30nb0i976y.jpg)

* 实现搜索功能，搜索信息中包含关键字的主播

		let key = ctx.params.key.toLowerCase() || null;
  		let results = [];
  		let result = [];
  		_.each(fetchResultData, (platform, keys) => {
    		result = _.filter(platform, (item, index) => {
      			return item.title.toLowerCase().includes(key) || item.anchor.toLowerCase().includes(key);
    		})
    		results.push(result);
  		})
  		let data = _.flatten(results, true);
  		ctx.body = JSON.stringify(_.uniqBy(data, 'anchor'));
  		
  ![](http://ww4.sinaimg.cn/large/0060lm7Tgy1fhv0x7f6mlj30ip0en765.jpg)

### 版本说明

目前还不支持自定义平台和自定义游戏类型。

目前支持的平台有斗鱼、虎牙。

支持的游戏有英雄联盟、狼人杀、魔兽世界、刀塔2、炉石传说、守望先锋、主机游戏和王者荣耀。
￼
