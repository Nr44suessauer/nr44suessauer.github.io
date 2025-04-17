// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    // Hier den Dark Mode als Default setzen
    ui: {
      primary: 'dark', // Primärfarbe auf "dark" setzen
      gray: 'slate',   // Optional: Eine Graupalette wählen
      colors: ['dark'] // Optional: Verfügbare Themefarben definieren
    },
    title: 'Alpine',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://github.com/Nr44suessauer' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Social Media' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    // Sozial Links
    socials: {
      github: 'Nr44suessauer',

      instagram: {
        icon: 'uil:instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/nr44mitreis/'
      },
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/marc-nauendorf-266234329/'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
