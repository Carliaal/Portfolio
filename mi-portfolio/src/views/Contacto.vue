<script setup>
import Navbar from '@/components/Navbar.vue';
import SocialCards from '../components/SocialCards.vue';

// Definimos el array de redes sociales para mapearlo en el template
const socialMedia = [
  { 
    name: 'GitHub', 
    iconUrl: 'https://cdn.simpleicons.org/github/white', 
    url: 'https://github.com/Carliaal'
  },
  { 
    name: 'Instagram', 
    iconUrl: 'https://cdn.simpleicons.org/instagram/white', 
    url: 'https://instagram.com/carliaal' 
  },
  { 
    name: 'TikTok', 
    iconUrl: 'https://cdn.simpleicons.org/tiktok/white', 
    url: 'https://tiktok.com/@carliaal' 
  },
  { 
    name: 'X', 
    iconUrl: 'https://cdn.simpleicons.org/x/white', 
    url: 'https://x.com/carliicgp' 
  },
  { 
    name: 'Facebook', 
    iconUrl: 'https://cdn.simpleicons.org/facebook/white', 
    url: 'https://facebook.com/share/1LQ9EdM5xU/' 
  }
];
</script>

<template>
  <div class="min-h-screen bg-[#050005] text-white selection:bg-pink-500/30">
    <Navbar />
    
    <section class="flex justify-center items-center py-20">
      <div class="w-full max-w-lg px-4 mt-20">
        <div class="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden hover:border-pink-500/50 hover:bg-pink-500/5 
          shadow-[0_0_25px_rgba(236,72,153,0.2)] hover:shadow-[0_0_25px_rgba(235,148,187,0.4)]">
          
          <div class="flex justify-center">
            <img src="/Gemini_Generated_Image_nfj0aknfj0aknfj0.png" alt="Perfil"
              class="w-32 h-32 rounded-full border-4 border-pink-500 mb-6 object-cover" />
          </div>

          <div class="flex justify-center gap-3 mb-8">
            <h2 class="text-3xl font-bold tracking-tight text-white">@Carliaal</h2>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <SocialCards 
              v-for="social in socialMedia" 
              :key="social.name"
              :name="social.name"
              :iconUrl="social.iconUrl"
              :url="social.url"
            />
          </div>

        </div>
      </div>
    </section>
  </div>
</template>