<script lang="ts" setup>
const alpine = useAppConfig().alpine
</script>

<template>
  <footer
    :class="[
      alpine.footer.alignment
    ]"
  >
    <NuxtLink v-if="alpine.footer?.credits?.enabled" class="credits" :to="alpine.footer.credits.repository">
      {{ alpine.footer?.credits?.text }}
    </NuxtLink>

    <div v-if="alpine.footer.navigation" class="navigation">
      <MainNav />
    </div>

    <p v-if="alpine.footer?.message" class="message">
      {{ alpine.footer.message }}
    </p>

    <div class="icons">
      <div v-if="alpine.socials && Object.entries(alpine.socials)" class="social">
        <SocialIcons :socials="alpine.socials" />
      </div>
            <!-- <div class="color-mode-switch">
        <ColorModeSwitch />
      </div> -->
    </div>
  </footer>
</template>

<style scoped lang="ts">
css({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '{space.24}',
    py: '{space.8}',
    '&.left': {
      alignItems: 'flex-start'
    },
    '&.right': {
      alignItems: 'flex-end'
    },
    '@md': {
      minHeight: '{space.36}',
    },
    '.credits': {
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      marginBottom: '{space.4}',
    },
    '.navigation': {
      display: 'none',
      '@sm': {
        display: 'flex',
        marginBottom: '{space.8}',
        fontSize: '{text.base.fontSize}',
        lineHeight: '{text.base.lineHeight}',
        fontWeight: '{fontWeight.medium}',
      }
    },
    '.message': {
      textAlign: 'center',
      marginBottom: '{space.4}',
    },
    '.icons': {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '{space.4}',
      '.left &&': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      '.right &&': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
      },
      '.social': {
        gridColumn: 'span 12 / span 12',
        display: 'flex',
        justifyContent: 'center',
        gap: '{space.4}',
        '@xs': {
          gridColumn: 'span 12 / span 12', // Geändert, um den gesamten Platz einzunehmen
          justifyContent: 'center',
        }
      },
      // CSS für color-mode-switch wurde hier entfernt, da wir dieses Element nicht mehr verwenden
    },
  }
})
</style>
