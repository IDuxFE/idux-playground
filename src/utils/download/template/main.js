import { createApp } from 'vue'
import Idux from './idux.js'
import IduxCharts from './iduxCharts.js'

import App from './PlaygroundApp.vue'

createApp(App).use(Idux).use(IduxCharts).mount('#app')
