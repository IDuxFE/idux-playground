import { createApp } from 'vue'
import '@vue/repl/style.css'
import 'uno.css'
import '@idux/components/default.css'

import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
} from '@idux/components/icon'

// 如果不需要 reset 全局样式和滚动条样式，移除下面 2 行代码
import '@idux/components/style/core/reset.default.css'
import '@idux/components/style/core/reset-scroll.default.css'

// 静态加载: `IDUX_ICON_DEPENDENCIES` 是 `@idux` 的部分组件默认所使用到图标，建议在此时静态引入。
addIconDefinitions(IDUX_ICON_DEPENDENCIES)

import App from './App.vue'

// window.VUE_DEVTOOLS_CONFIG = {
//   defaultSelectedAppId: 'repl',
// }

createApp(App).mount('#app')
