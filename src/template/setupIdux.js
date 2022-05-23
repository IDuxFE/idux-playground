import { getCurrentInstance } from "vue"
import IduxCdk from "@idux/cdk"
import IduxComponents, {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
  createGlobalConfig,
} from '@idux/components'

addIconDefinitions(IDUX_ICON_DEPENDENCIES);

const loadIconDynamically = (iconName) => {
  return fetch(`https://idux-cdn.sangfor.com.cn/icons/${iconName}.svg`)
          .then((res) => res.text());
}

const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
})

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(globalConfig)
}

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '#STYLE_HREF#'
  document.body.appendChild(link)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadCss()
}
