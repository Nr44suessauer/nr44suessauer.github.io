import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      // Update the background color in light & dark mode
      backgroundColor: {
        initial: '#0f172a',
        dark: '#f8fafc'
      }
    }
  }
})