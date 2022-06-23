import { getCurrentInstance } from 'vue'
import * as IduxComponents from '@idux/components'
import * as IduxCdk from '@idux/cdk'
import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
  createGlobalConfig,
} from '@idux/components';

addIconDefinitions(IDUX_ICON_DEPENDENCIES);

const targetConfig = {
  target: document.body,
}

const globalConfig = createGlobalConfig({
  modal: targetConfig,
  drawer: targetConfig,
  message: targetConfig,
  notification: targetConfig,
  imageViewer: targetConfig,
})

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents).use(globalConfig)
}

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = './idux-components.default.min.css'
  document.body.appendChild(link)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadCss()
}
