<script lang="ts" setup>
import { computed } from 'vue'

const { navigation } = useContent()

const emits = defineEmits(['linkClick'])

function handleClick() {
  emits('linkClick')
}

// Filter out pages with navigation: false
const filteredNavigation = computed(() => {
  return navigation.value?.filter((link: any) => link.navigation !== false) || []
})
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link of filteredNavigation"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
          @click="handleClick"
        >
          <span class="underline-fx" />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    ul: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      gap: '{space.4}',
      '@sm': {
        flexDirection: 'row',
        gap: '{space.8}',
      },
      a: {
        position: 'relative',
        '&.router-link-active': {
          color: '{color.primary.500}'
        },
        '.underline-fx': {
          position: 'absolute',
          bottom: '-4px',
          width: 0,
          height: '1px',
          backgroundColor: 'currentColor',
          transition: 'width 200ms ease-in-out',
          'a:hover &&': {
            width: '100%'
          }
        }
      },

    }
  }
})
</style>
