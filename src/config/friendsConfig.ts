import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Suffine Hub",
		imgurl: "https://pic1.imgdb.cn/item/681ad56458cb8da5c8e1f5aa.webp",
		desc: "分享学习路程，表态生活。",
		siteurl: "https://sufine.top",
		tags: ["Blog"],
		weight: 12, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
		{
		title: "云渡书舟",
		imgurl: "https://nav.sufine.top/images/internet.png",
		desc: "一方数字栖居，聚万象为舟楫，渡日常于须臾。",
		siteurl: "https://nav.sufine.top",
		tags: ["导航站"],
		weight: 11, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "夏夜流萤",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 9,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight);
};
