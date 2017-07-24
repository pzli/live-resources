module.exports = {
	gameType: [
		{
			name: 'all',
			name_cn: '全部直播',
			name_en: 'All Channel',
		},
		{
			name: 'lol',
			name_cn: '英雄联盟',
			name_en: 'League of Legends',
		},		
		{
			name: 'werewolf',
			name_cn: '狼人杀',
			name_en: 'Werewolf',
		},
		{
            name: 'wow',
            name_cn: '魔兽世界',
            name_en: 'World Of Warcraft',
        },
        {
            name: 'dota2',
            name_cn: 'DOTA2',
            name_en: 'dota2',
        },
        {
            name: 'hearthstone',
            name_cn: '炉石传说',
            name_en: 'Hearthstone',
        },
        {
            name: 'overwatch',
            name_cn: '守望先锋',
            name_en: 'Overwatch',
        },
        {
            name: 'tvgame',
            name_cn: '主机游戏',
            name_en: 'TV Game',
        },
        {
            name: 'hok',
            name_cn: '王者荣耀',
            name_en: 'Honour of Kings',
        }
	],
	platforms: [
		{
			name: 'douyu',
			href: `http://www.douyu.com/directory/game/`,
			minView: 500,
		},
	    {
	        name: 'huya',
	        href: `http://www.huya.com/cache.php?m=LiveList&do=getLiveListByPage&gameId=`,
	        minView: 100,
	    },   
	]
}