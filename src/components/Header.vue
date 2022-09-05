<template>
  <div class="flex justify-between p-2">
    <h1 class="text-base">
      iDux Playground
    </h1>
  
    <IxForm
      class="playground-header-form"
      layout="inline"
      :message-tooltip="true"
    > 
      <template
        v-for="item of selectors"
        :key="item.name"
      >
        <IxSpin :spinning="item.isLoading">
          <IxFormItem :label="item.name">
            <IxSelect
              v-model:value="item.activeVer"
              class="min-w-32"
              :searchable="true"
              @update:value="onVerChange(item.name, $event)"
            >
              <IxSelectOption
                v-for="ver in item.vers"
                :key="ver"
                :label="ver"
                :value="ver"
              />
            </IxSelect>
          </IxFormItem>
        </IxSpin>
      </template>
      <IxSpace size="sm">
        <IxButton
          size="sm"
          @click="downloadProject(store)"
        >
          Download
        </IxButton>
        <IxButton
          size="sm"
          @click="onShareClick"
        >
          Share
        </IxButton>
        <IxButton
          size="sm"
          mode="link"
          href="https://github.com/IDuxFE/idux-playground"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </IxButton>
      </IxSpace>
    </IxForm>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from '@idux/components/message'
import { downloadProject, getIduxVersions, getVueVersions } from '@/utils'
import type { ReplStore } from '@/repl-store'
import type { VersionKey } from '@/types'

const props = defineProps<{
  store: ReplStore
}>()

const { success, warning } = useMessage()
const onShareClick = async () => {
  if (!navigator.clipboard) {
    warning('navigator.clipboard is undefined')
    return
  }
  await navigator.clipboard.writeText(location.href)
  success('Current URL has been copied to clipboard.')
}

const selectors = reactive({
  Vue: {
    name: 'Vue',
    vers: getVueVersions(),
    activeVer: props.store.versions.Vue,
    isLoading: false,
  },
  iDux: {
    name: 'iDux',
    vers: getIduxVersions(),
    activeVer: props.store.versions.iDux,
    isLoading: false,
  },
})

const onVerChange = async (name: string, ver: unknown) => {
  selectors[name as VersionKey].isLoading = true
  await props.store.setVersion(name as VersionKey, ver as string)
  selectors[name as VersionKey].isLoading = false
}
</script>

<style>
  @media (max-width: 720px) {
    .playground-header-form {
      display: none;
    }
  }
</style>
