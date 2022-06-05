<template>
  <IxDrawerProvider>
    <IxNotificationProvider>
      <IxModalProvider>
        <IxMessageProvider>
          <App />
        </IxMessageProvider>
      </IxModalProvider>
    </IxNotificationProvider>
  </IxDrawerProvider>
</template>

<script lang="ts" setup>
import { setupIdux } from './setupIdux.js'
import App from './App.vue'
setupIdux()
</script>
