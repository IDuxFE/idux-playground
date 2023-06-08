<template>
  <IxMessageProvider>
    <IxSpin
      v-if="isLoading"
      tip="loading..."
    >
      <div class="ixp-height-full" />
    </IxSpin>
    <div class="flex flex-col ixp-height-full">
      <PlaygroundHeader :store="store" />
      <Repl
        :class="className"
        auto-resize
        show-compile-output
        :store="store"
        :layout="layout"
        :clear-console="false"
      />
    </div>
  </IxMessageProvider>
</template>

<script lang="ts" setup>
import { ReplStore } from '@/repl-store'
import { Repl } from '@vue/repl'

const isLoading = ref(true)

// experimental features
// import type {  SFCOptions } from '@vue/repl'
// const sfcOptions: SFCOptions = {
//   script: {
//     reactivityTransform: true,
//   },
// }

const store = new ReplStore({
  serializedState: location.hash.slice(1),
})

store.init().then(() => {
  isLoading.value = false
})

watchEffect(() => history.replaceState({}, '', store.serialize()))


let className = ref(['grow'])
let layout = ref('horizontal')

const isEditor = location.search.indexOf('editor=false') === -1

// 如果非编辑模式下，layout变成垂直布局，隐藏left；
if (!isEditor) {
  className.value = ['grow', 'ixp-hidden-left']
  layout.value = 'vertical'
}


</script>

<style scoped>
.ixp-height-full {
  height: 100vh;
}

.ixp-hidden-left /deep/ .left{
  display: none;
}

.ixp-hidden-left /deep/ .right{
  height: 100% !important;
}
</style>
