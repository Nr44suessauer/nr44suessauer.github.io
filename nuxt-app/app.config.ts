// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    // Hier den Dark Mode als Default setzen
    ui: {
      primary: 'dark', // Primärfarbe auf "dark" setzen
      gray: 'slate',   // Optional: Eine Graupalette wählen
      colors: ['dark'] // Optional: Verfügbare Themefarben definieren
    },

    // Header-Konfiguration für das Logo
    header: {
      position: 'right',  // Position des Headers
      logo: false         // Logo explizit deaktivieren
    },

    // Footer-Konfiguration hinzufügen, um Credits zu deaktivieren
    footer: {
      credits: {
        enabled: false, // Credits im Footer deaktivieren
      },
      // Optional: Eigene Footer-Nachricht hinzufügen
      message: '© 2025 Marc Nauendorf'
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
