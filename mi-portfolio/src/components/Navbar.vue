<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-8 py-6">

    <div
      class="max-w-[1400px] mx-auto flex justify-between items-center bg-gradient-to-r from-pink-500/80 to-purple-600/80 backdrop-blur-md px-12 py-4 rounded-full border border-white/20 shadow-[0_8px_32px_0_rgba(255,77,166,0.4)]">

      <div class="font-bold text-2xl flex items-center gap-2 text-white tracking-tighter uppercase">
        <img class="size-10" src="/icons8-gato-64(1).png" alt=""><router-link :to="{ path: '/' }" class="hover:text-purple-400 transition-all">
          Carliaal
        </router-link> <span class="text-xl"></span>
      </div>

      <div class="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-white/90">
        <router-link :to="{ path: '/', hash: '#sobre-mi' }" class="hover:text-purple-400 transition-all">
          Sobre mí
        </router-link>

        

        <router-link :to="{ path: '/', hash: '#habilidades' }" class="hover:text-purple-400 transition-all">
          Habilidades
        </router-link>

        <router-link :to="{ path: '/', hash: '#habilidades' }" class="hover:text-purple-400 transition-all">
          Experiencia
        </router-link>

        <router-link :to="{ path: '/', hash: '#proyectos' }" class="hover:text-purple-400 transition-all">
          Proyectos
        </router-link>

        <router-link :to="{ path: '/', hash: '#contacto' }" class="hover:text-purple-400 transition-all border-l border-white/20 pl-10">
          Contacto
        </router-link>
      </div>

    </div>
  </nav>
</template>