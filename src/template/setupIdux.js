import { getCurrentInstance } from 'vue'
import IduxCdk from '@idux/cdk'
import IduxComponents, {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
  createGlobalConfig,
} from '@idux/components'
import IduxPro from '@idux/pro'

addIconDefinitions(IDUX_ICON_DEPENDENCIES)

const loadIconDynamically = (iconName) => {
  return fetch(`https://idux-cdn.sangfor.com.cn/icons/${iconName}.svg`)
    .then((res) => res.text())
}

// const targetConfig = {
//   target: document.body,
// }

const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
  // modal: targetConfig,
  // drawer: targetConfig,
  // message: targetConfig,
  // notification: targetConfig,
  // imageViewer: targetConfig,
})

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro).use(globalConfig)
}

const loadResetCss = () => {
  const resetLink = document.createElement('link')
  resetLink.rel = 'stylesheet'
  resetLink.href = './reset.default.css'
  document.body.appendChild(resetLink)

  const resetScrollLink = document.createElement('link')
  resetScrollLink.rel = 'stylesheet'
  resetScrollLink.href = './reset-scroll.default.css'
  document.body.appendChild(resetScrollLink)
}

const loadCss = () => {
  const cdkLink = document.createElement('link')
  cdkLink.rel = 'stylesheet'
  cdkLink.href = '#CDK_STYLE_HREF#'
  document.body.appendChild(cdkLink)

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '#STYLE_HREF#'
  document.body.appendChild(link)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadResetCss()
  loadCss()
}
