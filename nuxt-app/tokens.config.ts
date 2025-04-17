import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      backgroundColor: {
        initial: '{color.black}',
        dark: '{color.black}'
      },
      color: {
        initial: '{color.gray.800}',
        dark: '{color.gray.200}'
      }
    },
  }
})