<template>
  <div class="bip-gallery">
    <div class="gallery-grid">
      <ImageTile
        v-for="(image, index) in allImages" 
        :key="index"
        :image="image"
        :loading="index < 4 ? 'eager' : 'lazy'"
        class="gallery-item"
      />
    </div>
  </div>
</template>

<script setup>
import ImageTile from './ImageTile.vue'

// Image data - All images from BIP folder
const allImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/GroupPic.JPG?raw=true",
    alt: "Group Picture"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/Germans.JPG?raw=true",
    alt: "German Team"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/me.JPG?raw=true",
    alt: "Personal Photo"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/seeu.JPG?raw=true",
    alt: "S.E.E.U. Campus"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/workSEEU.JPG?raw=true",
    alt: "Working at S.E.E.U."
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/AlexandertheBIgone.JPG?raw=true",
    alt: "Alexander the Great"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/BWRepresantion.JPG?raw=true",
    alt: "Baden-Württemberg Representation"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohrid.JPG?raw=true",
    alt: "Ohrid"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridpart.JPG?raw=true",
    alt: "Ohrid Part"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/OhridLake.JPG?raw=true",
    alt: "Ohrid Lake"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/LakeOhrid2.JPG?raw=true",
    alt: "Lake Ohrid 2"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/onMountainOhrid.JPG?raw=true",
    alt: "On Mountain Ohrid"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ourPlaceinOhrid.JPG?raw=true",
    alt: "Our Place in Ohrid"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/Promenade.JPG?raw=true",
    alt: "Promenade"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/bridge.JPG?raw=true",
    alt: "Bridge"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/hoteltino.JPG?raw=true",
    alt: "Hotel Tino"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/TinoMorning1.JPG?raw=true",
    alt: "Tino Morning"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/church/chruchbetweenohridandskope1.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 1"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/church/chruchbetweenohridandskope2.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 2"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/church/viewfromchruce.JPG?raw=true",
    alt: "View from Church"
  },
    {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/TinoWithSupervisor.JPG?raw=true",
    alt: "Tino with Supervisor"
  }
]
</script>

<style scoped>
.bip-gallery {
  margin: 20px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  width: 100%;
  margin: 20px 0;
  align-items: start;
}

.gallery-item {
  width: 100%;
}

/* Remove the old .gallery-img styles since we're using ImageTile now */

/* Mobile Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
