import { defineNuxtPlugin } from 'nuxt/app'
import CounterButton from '~/components/CounterButton.vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Registriere die CounterButton-Komponente global
  nuxtApp.vueApp.component('CounterButton', CounterButton)
})