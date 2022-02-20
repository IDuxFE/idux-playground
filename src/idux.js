
import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import IduxPro from '@idux/pro'

// 与@/utils/download/template/idux.js的不同之处在css引入
// import '@idux/components/default.min.css'
// import '@idux/pro/default.min.css'

// 默认为中文，可以打开注释设置为其他语言
// import { useLocale, enUS } from "@idux/components/i18n";
// useLocale(enUS);

// import { createGlobalConfig } from '@idux/components/config'
import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
} from '@idux/components/icon'

// 静态加载: `IDUX_ICON_DEPENDENCIES` 是 `@idux` 的部分组件默认所使用到图标，建议在此时静态引入。
addIconDefinitions(IDUX_ICON_DEPENDENCIES)

// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
// 注意：请确认图标的 svg 资源依旧被正确放入到 `public/idux-icons` 目录中
// const loadIconDynamically = (iconName) => {
//   return fetch(`/idux-icons/${iconName}.svg`).then((res) => res.text())
// }

// const globalConfig = createGlobalConfig({
//   icon: { loadIconDynamically },
// })

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro)
}

export default { install }
