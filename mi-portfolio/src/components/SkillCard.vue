<template>
  <div class="group flex flex-col items-center justify-center p-3 aspect-square rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 w-full
              hover:border-pink-500/50 hover:bg-pink-500/5 
              shadow-[0_0_25px_rgba(236,72,153,0.2)] hover:shadow-[0_0_25px_rgba(235,148,187)]" >
    
    <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
      <img :src="iconUrl" class="w-7 h-7 object-contain" :alt="name" />
    </div>

    <span class="mt-2 text-[10px] font-bold text-gray-500 group-hover:text-white uppercase tracking-tighter text-center">
      {{ name }}
    </span>
  </div>

</template>

<script setup>
defineProps({
  name: String,
  iconUrl: String
})
</script>