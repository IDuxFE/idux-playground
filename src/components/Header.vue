<template>
  <div class="flex justify-between p-2">
    <h1 class="text-base">
      iDux Playground
      {{ versionText }}
    </h1>
    <IxSpace>
      <IxButton @click="downloadProject(store)">
        Download
      </IxButton>
      <IxPopover>
        <IxButton @mouseenter="updateQrcodeVal">
          QRCode
        </IxButton>
        <template #content>
          <QrcodeVue
            :value="qrcodeVal"
            :size="500"
          />
        </template>
      </IxPopover>
      <IxButton @click="onShareClick">
        Share
      </IxButton>
      <IxButton
        mode="link"
        href="https://github.com/IDuxFE/idux-playground"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </IxButton>
    </IxSpace>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from '@idux/components/message'
import { copyText, downloadProject } from '@/utils'
import type { ReplStore } from '@/repl-store'
import QrcodeVue from 'qrcode.vue'

const props = defineProps<{
  store: ReplStore
}>()

const { success, warning } = useMessage()

const onShareClick = async () => {
  if (!navigator.clipboard) {
    copyText(location.href) || warning('navigator.clipboard is undefined')
    return
  }
  await navigator.clipboard.writeText(location.href)
  success('Current URL has been copied to clipboard.')
}

const versionText = computed(
  () => ` ( Vue@${props.store.versions.Vue}, iDux@${props.store.versions.Idux} )`
)

const qrcodeVal = ref('')

const updateQrcodeVal = () => {
  qrcodeVal.value = location.href
}
</script>
