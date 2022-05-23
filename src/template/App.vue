<template>
  <div style="padding: 24px">
    <IxButton @click="onOpen">Open modal</IxButton>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '@idux/components'

const { open } = useModal()
const onOpen = () => open({ header: 'Hello @idux', content: 'This is playground app' })
</script>
