export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["aktien/Bedingungen.pdf","drafts/hoffmanns-schuppen/ads/g-s-dunkel_ls.png","drafts/hoffmanns-schuppen/Aktie.png","drafts/hoffmanns-schuppen/investing.jpg","drafts/hoffmanns-schuppen/local_business.jpg","images/abstract.jpg","images/depri_portrait.jpg","images/depri_portrait_square.jpg","images/logos/t-r_logo.svg","images/mockups/presenter_notes_mockup.png","images/programming.jpg","tavy/icons/2024-03/README.md","tavy/icons/2024-03/svg/add-circle.svg","tavy/icons/2024-03/svg/add-outline.svg","tavy/icons/2024-03/svg/add.svg","tavy/icons/2024-03/svg/back.svg","tavy/icons/2024-03/svg/check-outline.svg","tavy/icons/2024-03/svg/check.svg","tavy/icons/2024-03/svg/chevron-down.svg","tavy/icons/2024-03/svg/chevron-up.svg","tavy/icons/2024-03/svg/close-outline.svg","tavy/icons/2024-03/svg/close.svg","tavy/icons/2024-03/svg/forward.svg","tavy/icons/2024-03/svg/heart-filled.svg","tavy/icons/2024-03/svg/heart.svg","tavy/icons/2024-03/svg/home.svg","tavy/icons/2024-03/svg/info.svg","tavy/icons/2024-03/svg/instagram.svg","tavy/icons/2024-03/svg/lock-open.svg","tavy/icons/2024-03/svg/lock.svg","tavy/icons/2024-03/svg/menu.svg","tavy/icons/2024-03/svg/open-in-new.svg","tavy/icons/2024-03/svg/pause.svg","tavy/icons/2024-03/svg/person.svg","tavy/icons/2024-03/svg/play.svg","tavy/icons/2024-03/svg/search.svg","tavy/icons/2024-03/svg/settings.svg","tavy/icons/2024-03/svg/tiktok.svg","tavy/icons/2024-03/svg/trash.svg","tavy/icons/2024-03/svg/youtube.svg","tavy/icons/2024-03/tavy-icons-2024-03.zip","tavy/icons/2024-03-A/README.md","tavy/icons/2024-03-A/svg/add-circle.svg","tavy/icons/2024-03-A/svg/add-outline.svg","tavy/icons/2024-03-A/svg/add.svg","tavy/icons/2024-03-A/svg/arrow-back.svg","tavy/icons/2024-03-A/svg/arrow-forward.svg","tavy/icons/2024-03-A/svg/back.svg","tavy/icons/2024-03-A/svg/check-outline.svg","tavy/icons/2024-03-A/svg/check.svg","tavy/icons/2024-03-A/svg/chevron-down.svg","tavy/icons/2024-03-A/svg/chevron-up.svg","tavy/icons/2024-03-A/svg/close-outline.svg","tavy/icons/2024-03-A/svg/close.svg","tavy/icons/2024-03-A/svg/download.svg","tavy/icons/2024-03-A/svg/forward.svg","tavy/icons/2024-03-A/svg/heart-filled.svg","tavy/icons/2024-03-A/svg/heart.svg","tavy/icons/2024-03-A/svg/home.svg","tavy/icons/2024-03-A/svg/info.svg","tavy/icons/2024-03-A/svg/instagram.svg","tavy/icons/2024-03-A/svg/lock-open.svg","tavy/icons/2024-03-A/svg/lock.svg","tavy/icons/2024-03-A/svg/menu.svg","tavy/icons/2024-03-A/svg/not-found.svg","tavy/icons/2024-03-A/svg/open-in-new.svg","tavy/icons/2024-03-A/svg/pause.svg","tavy/icons/2024-03-A/svg/person.svg","tavy/icons/2024-03-A/svg/play.svg","tavy/icons/2024-03-A/svg/search.svg","tavy/icons/2024-03-A/svg/settings.svg","tavy/icons/2024-03-A/svg/tiktok.svg","tavy/icons/2024-03-A/svg/trash.svg","tavy/icons/2024-03-A/svg/youtube.svg","tavy/icons/2024-03-A/tavy-icons-2024-03-A.zip"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".md":"text/markdown",".zip":"application/zip"},
	_: {
		client: {"start":"_app/immutable/entry/start.32ba719d.js","app":"_app/immutable/entry/app.ff02743b.js","imports":["_app/immutable/entry/start.32ba719d.js","_app/immutable/chunks/index.9387a7f5.js","_app/immutable/chunks/singletons.783c13f7.js","_app/immutable/chunks/index.a2018c2b.js","_app/immutable/entry/app.ff02743b.js","_app/immutable/chunks/index.9387a7f5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/access",
				pattern: /^\/admin\/access\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/access/[password]",
				pattern: /^\/admin\/access\/([^/]+?)\/?$/,
				params: [{"name":"password","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/login/[state]",
				pattern: /^\/admin\/login\/([^/]+?)\/?$/,
				params: [{"name":"state","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/countdown",
				pattern: /^\/countdown\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/investor-relations",
				pattern: /^\/investor-relations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/investor-relations/bedingungen",
				pattern: /^\/investor-relations\/bedingungen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/mach-mit",
				pattern: /^\/mach-mit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/produkte",
				pattern: /^\/produkte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
