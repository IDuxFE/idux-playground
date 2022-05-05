
export const setupIdux = 'setupIdux.js'

export const iduxCode = `
import { getCurrentInstance } from 'vue'
import IduxComponents from '@idux/components'
import IduxCdk from '@idux/cdk'

const install = (app) => {
  app.use(IduxCdk).use(IduxComponents)
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
`

export const defaultFile = 'App.vue'

export const defaultCode = `<template>
  <div style="padding: 20px 100px;">
    <div>你认为下面哪一个人最帅？</div>
    <IxRadioGroup v-model:value="value">
      <IxSpace vertical>
        <IxRadio value="1998">1998年出生的快哥</IxRadio>
        <IxRadio value="1989">1989年出生的快子</IxRadio>
        <IxRadio value="1898">1898年出生的快爷</IxRadio>
        <IxRadio value="2008">2008年出生的快仔</IxRadio>
      </IxSpace>
    </IxRadioGroup>
  </div>
</template>

<script setup lang="ts">
import { setupIdux } from './setupIdux.js'
import { ref } from 'vue'

const value = ref('2008')

setupIdux() // don't remove
</script>`
