export default defineAppConfig({
  alpine: {
    title: 'Alpine',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right',
      logo: false  // Logo ausschalten
    },
    footer: {
      credits: {
        enabled: false,
        text: 'Benis',
        repository: 'https://www.github.com/nuxt-themes/alpine'
      },
      navigation: true,
      alignment: 'center',
      message: 'Follow me on'
    },
    socials: {
      twitter: '',
      instagram: '',
      github: '',
      facebook: '',
      medium: '',
      youtube: ''
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    },
    backToTop: {
      text: 'Back to top',
      icon: 'material-symbols:arrow-upward'
    }
  }
})
