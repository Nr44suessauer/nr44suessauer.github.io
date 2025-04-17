import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      // Update the background color in light & dark mode
      backgroundColor: {
        initial: '#f8fafc',
        dark: '#0f172a'
      }
    }
  }
})