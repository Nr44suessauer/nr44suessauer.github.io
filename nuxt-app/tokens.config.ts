import { defineTheme } from 'pinceau'


export default defineTheme({
  alpine: {
    body: {
      backgroundColor: {
        initial: '{color.black}',
        dark: '{color.black}'
      },
      color: {
        initial: '{color.white}', 
        dark: '{color.white}'     // Text im Dark Mode
      }
    },
    backdrop: {
      backgroundColor: {
        initial: '#18181bb3', 
        dark: '#f4f4f5b3'     // Hintergrund für Dark Mode
      }
    },
  }
})