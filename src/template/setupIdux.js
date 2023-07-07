import { getCurrentInstance } from 'vue'
import IduxCdk from '@idux/cdk'
import IduxComponents, {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
  createGlobalConfig,
  IxIcon,
} from '@idux/components'
import IduxPro from '@idux/pro'

addIconDefinitions(IDUX_ICON_DEPENDENCIES)
const iduxIconUrlBase = '//gcode.uedc.sangfor.com.cn/idux-icons/'

const loadIconDynamically = (iconName) => {
  return fetch(`${iduxIconUrlBase}${iconName}.svg`)
    .then((res) => res.text())
}

// const targetConfig = {
//   target: document.body,
// }

const globalConfig = createGlobalConfig({
  common: {
    theme: 'seer',
  },
  button: {
    size: 'sm',
  },
  desc: {
    colonless: true,
    labelAlign: 'start',
  },
  form: {
    colonless: true,
    labelAlign: 'start',
  },
  menu: {
    offset: [0, 4],
  },
  modal: {
    centered: true,
    maskClosable: false,
  },
  progress: {
    strokeLinecap: 'square',
  },
  table: {
    columnExpandable: {
      icon: ({ expanded }) => h(IxIcon, { name: expanded ? 'minus-square' : 'plus-square' }),
    },
  },
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
  resetLink.href = './reset.seer.css'
  document.body.appendChild(resetLink)

  const resetScrollLink = document.createElement('link')
  resetScrollLink.rel = 'stylesheet'
  resetScrollLink.href = './reset-scroll.seer.css'
  document.body.appendChild(resetScrollLink)
}

const loadCss = () => {
  const cdkLink = document.createElement('link')
  cdkLink.rel = 'stylesheet'
  cdkLink.href = '#CDK_STYLE_HREF#'
  document.body.appendChild(cdkLink)

  const componentsLink = document.createElement('link')
  componentsLink.rel = 'stylesheet'
  componentsLink.href = '#COMPONENTS_STYLE_HREF#'
  document.body.appendChild(componentsLink)

  const proLink = document.createElement('link')
  proLink.rel = 'stylesheet'
  proLink.href = '#PRO_STYLE_HREF#'
  document.body.appendChild(proLink)
}

export const setupIdux = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })
  loadResetCss()
  loadCss()
}
