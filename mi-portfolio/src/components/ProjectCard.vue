<template>
    <div class="border border-white/10 rounded-lg p-4 hover:border-pink-500/50 hover:bg-pink-500/5 
              shadow-[0_0_25px_rgba(236,72,153,0.2)] hover:shadow-[0_0_25px_rgba(235,148,187)] aspect-square rounded-2xl">
        <div class="w-full h-56 overflow-hidden border-b border-white/5">
            <img :src="image" alt="">
        </div>
        <h3 class="font-medium">{{ title }}</h3>
        <p class="mt-2 text-sm text-white/70">{{ description }}</p>
        <div class="mt-6 flex flex-col sm:flex-row gap-4">
            <a :href="codeUrl" class="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 transition-transform text-white px-8 py-3 rounded-2xl font-bold shadow-[0_0_20px_rgba(236,72,153,0.4)]">Enlace</a>
            <a :href="gitCode" class="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3 rounded-2xl font-bold transition-all backdrop-blur-sm">GitHub</a>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    description: String,
    codeUrl: String,
    gitCode: String,
    image: String,
})
</script>