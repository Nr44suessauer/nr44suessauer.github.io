<script setup lang="ts">
import { useColorMode, onMounted } from '#imports'
const colorMode = useColorMode()

// Stellt sicher, dass der Dark Mode beim Erstladen gesetzt ist
onMounted(() => {
  colorMode.preference = 'dark'
})

const onClick = () => {
  const values = ['light', 'dark'] // Nur zwischen Light und Dark wechseln
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button aria-label="Color Mode" @click="onClick">
    <ColorScheme>
      <template v-if="colorMode.preference === 'dark'">
        <Icon name="uil:moon" />
        <span class="sr-only">Dark mode</span>
      </template>
      <template v-else-if="colorMode.preference === 'light'">
        <Icon name="uil:sun" />
        <span class="sr-only">Light mode</span>
      </template>
      <template v-else>
        <Icon name="uil:desktop" />
        <span class="sr-only">System mode</span>
      </template>
    </ColorScheme>
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    display: 'flex',
    '--color-mode-switcher-size': '24px',
    width: 'var(--color-mode-switcher-size)',
    height: 'var(--color-mode-switcher-size)',
    ':hover': {
      color: '{color.primary.500}',
    },
    svg: {
      width: '100%',
      height: '100%',
    }
  }
})
</style>
