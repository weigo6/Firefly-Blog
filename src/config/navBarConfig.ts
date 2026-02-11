import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: (NavBarLink | LinkPreset)[] = [
		// 主页
		LinkPreset.Home,

		// 归档
		LinkPreset.Archive,
	];

	// 自定义导航栏链接,并且支持多级菜单
	links.push({
		name: "链接",
		url: "/links/",
		icon: "material-symbols:link",

		// 子菜单
		children: [
			{
				name: "GitHub",
				url: "https://github.com/weigo6",
				external: true,
				icon: "fa7-brands:github",
			},
			{
				name: "Bilibili",
				url: "https://space.bilibili.com/512710834",
				external: true,
				icon: "fa7-brands:bilibili",
			},
			{
				name: "Discord",
				url: "https://discord.gg/fSvCWA9say",
				external: true,
				icon: "fa7-brands:discord",
			},
			{
				name: "微信公众号",
				url: "https://bucket.rutno.com/d?sid=eqtRzdKfuGlmIm2wX3IwXffreqnr&e=1769434119&sig=aca3206c8defbfd303f1c5b6b36f51416243315723ae7e667fc98f7a5bf29111",
				external: true,
				icon: "simple-icons:wechat",
			},
			{
				name: "Gitee",
				url: "https://gitee.com/weigo6",
				external: true,
				icon: "simple-icons:gitee",
			},
		],
	});

	// 根据配置决定是否添加留言板，在siteConfig关闭pages.guestbook时导航栏不显示留言板
	if (siteConfig.pages.guestbook) {
		links.push(LinkPreset.Guestbook);
	}

	// 友链
	links.push(LinkPreset.Friends);

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [
			// 根据配置决定是否添加赞助，在siteConfig关闭pages.sponsor时导航栏不显示赞助
			...(siteConfig.pages.sponsor ? [LinkPreset.Sponsor] : []),

			// 关于页面
			LinkPreset.About,

			{
      			name: "博客主站",
      			url: "https://sufine.top",
      			external: true,         // 外部链接必须设为 true
      			icon: "fa7-solid:blog",
    		},

			// 根据配置决定是否添加番组计划，在siteConfig关闭pages.bangumi时导航栏不显示番组计划
			...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []),
		],
	});

	// 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
