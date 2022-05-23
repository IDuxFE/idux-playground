import { createApp } from 'vue'
import Idux from './idux.js'

import App from './PlaygroundApp.vue'

createApp(App).use(Idux).mount('#app')
