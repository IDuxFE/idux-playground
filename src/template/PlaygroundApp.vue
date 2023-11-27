<template>
  <ThemeProvider>
    <IxDrawerProvider>
      <IxNotificationProvider>
        <IxModalProvider>
          <IxMessageProvider>
            <App />
          </IxMessageProvider>
        </IxModalProvider>
      </IxNotificationProvider>
    </IxDrawerProvider>
  </ThemeProvider>
</template>

<script lang="ts" setup>
import { defineComponent, defineAsyncComponent } from "vue";
import { version } from "@idux/components";
import { setupIdux } from "./setupIdux.js";
import App from "./App.vue";
setupIdux();

const ThemeProvider = defineAsyncComponent(async () =>
  version.startsWith("2")
    ? (await import("@idux/components/theme")).IxThemeProvider
    : defineComponent(
        (_, { slots }) =>
          () =>
            slots.default?.()
      )
);
</script>
