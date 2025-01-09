// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of stuff",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-filesharing",
          title: "filesharing",
          description: "Filesharing with me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/FileSharing/";
          },
        },{id: "post-atemis-import-exercise",
      
        title: "Atemis | import exercise",
      
      description: "exercise structure | Example Project with instruction",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Artemis-Import-exercise/";
        
      },
    },{id: "post-old-but-gold",
      
        title: "Old but Gold",
      
      description: "Project Octoprint/3D Print Server, project from 2022.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Old-Project-about-3DServer/";
        
      },
    },{id: "post-plant-uml-install-guide",
      
        title: "Plant uml install guide",
      
      description: "Basic tool for generating uml diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Plant-UML/";
        
      },
    },{id: "post-introduction-platformio",
      
        title: "Introduction Platformio",
      
      description: "µC programming with PlatformIO",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Intruduction/";
        
      },
    },{id: "projects-develop-pc",
          title: 'Develop Pc',
          description: "LattePanda combined with nearly unlimited Power from a Nvidia Quadro 4000",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Develop_Pc/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4D%61%72%63.%4E%61%75%65%6E%64%6F%72%66@%48%73-%48%65%69%6C%62%72%6F%6E%6E.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Nr44suessauer", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/nr44mitreis", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/marc-nauendorf-266234329", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
