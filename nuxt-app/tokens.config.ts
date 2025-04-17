import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      backgroundColor: {
        initial: '{color.black}',
        dark: '{color.black}'
      },
      color: {
        initial: '{color.white}', // Text im Light Mode
        dark: '{color.white}'     // Text im Dark Mode
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