import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      backgroundColor: {
        initial: '{color.black}',
        dark: '{color.black}'
      },
      color: {
        initial: '{color.gray.800}', // Text im Light Mode
        dark: '{color.gray.200}'     // Text im Dark Mode
      }
    },
    backdrop: {
      backgroundColor: {
        initial: '#18181bb3', // Hintergrund für Light Mode
        dark: '#f4f4f5b3'     // Hintergrund für Dark Mode
      }
    },
  }
})