import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'

type NavConfig = DefaultTheme.Config['nav']

const nav: NavConfig = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '关于',
    link: '/about/',
  },
  {
    text: '王安黛',
    link: '/an-dai/',
  },
  {
    text: '文学作品',
    link: '/literature/',
  },
  {
    text: '存档',
    link: '/archive/',
  },
]

const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  excludeFilesByFrontmatterFieldName: true,
  collapsed: true,
  documentRootPath: '/docs',
} satisfies Partial<SidebarOptions>

const sidebarOptions = [
    // 首页
  {
    ...baseConfig,
    scanStartPath: '/',
    resolvePath: '/',
  },
  // 关于
  {
    ...baseConfig,
    scanStartPath: 'about',
    resolvePath: '/about/',
  },
  {
    ...baseConfig,
    scanStartPath: 'an-dai',
    resolvePath: '/an-dai/',
  },
  {
    ...baseConfig,
    scanStartPath: 'literature',
    resolvePath: '/literature/',
  },
  {
    ...baseConfig,
    scanStartPath: 'archive',
    resolvePath: '/archive/',
  },
]

const themeConfig: ThemeContext = {
  siteTitle: "Trans Archive!",
  siteDescription: "一个多元性别相关内容档案库",
  org: 'Trans Archive!', // 这里用于设定版权区显示的组织名
  siteLogo: '/logo.svg',
  // SiteTitle值为false时，logo位置不显示标题。未定义SiteTitle时，显示标题。SiteTitle值为abcd时，显示abcd。
    //   SiteTitle: false,
  /** Repo */
  githubRepoLink: 'https://github.com/trans-archive/Trans-Archive',
  /** vitepress 根目录 */
  rootDir: 'docs',
  /** 文档所在目录（目前似未使用此项） */
  include: ['about', 'tips', 'life'],
  nav,
  sidebarOptions,
  /** 文档所在目录（用于GitHub编辑链接） */
  sitePattern: `docs`,
  enableSuggestionBox: false,
  hostName: "https://library.2345.lgbt/",
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig)
