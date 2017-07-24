一个爬取各平台直播信息的工具。


### 安装过程

Using npm:
		
	$ npm i --save live-resources
	
In Node.js:

	let autoFetch = require('live-resources');
	
	
	let fetchResultData = {};
	autoFetch(fetchResultData);
	

### 使用介绍

该工具每隔90秒从各个直播平台获取直播信息，并进行相关的数据聚合，返回一个对象，保存着不同类别的直播信息。

向autoFetch中传入的fetchResultData为存储获得结果的对象，最终得到的数据类型格式如下：

![](http://ww3.sinaimg.cn/large/0060lm7Tgy1fhuxi8f1nvj30py0hrwh7.jpg)

你可以从上述数据中再次组合成你需要的数据合集。



### 版本说明

目前还不支持自定义平台和自定义游戏类型。

目前支持的平台有斗鱼、虎牙。

支持的游戏有英雄联盟、狼人杀、魔兽世界、刀塔2、炉石传说、守望先锋、主机游戏和王者荣耀。
￼
