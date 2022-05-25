
const config = {
	title: 'nginx',
	author: 'andy',

	base: '/nginx/',

	themeConfig: {
    subSidebar: 'auto',
	  sidebar: [
      {
        text: 'Nginx 基础',
        link: 'base',
        collapsable: true,
      },
      {
        text: 'Nginx 配置文件解析',
        link: 'conf-file',
      },
      {
        text: 'Nginx 常用配置',
        link: 'common-config',
      }
    ]
	},
}

export default config;
