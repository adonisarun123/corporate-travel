<template>
  <section class="bg-gradient-to-br from-blue-600 to-cyan-500 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-12 text-center fade-in">
          Technology Excellence
        </h2>

        <!-- Tech Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <!-- AI & ML -->
          <div class="glass bg-white/10 p-6 rounded-xl text-black slide-in-left">
            <div class="flex items-center justify-center mb-6">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold mb-3 text-center">AI & ML</h3>
            <p class="text-black/80 text-center text-sm">
              Advanced algorithms for intelligent travel recommendations and cost optimization
            </p>
          </div>

          <!-- Cloud Infrastructure -->
          <div class="glass bg-white/10 p-6 rounded-xl text-black slide-in-left" style="animation-delay: 100ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center">
                <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold mb-3 text-center">Cloud Infrastructure</h3>
            <p class="text-black/80 text-center text-sm">
              Scalable and secure cloud-native platform with global availability
            </p>
          </div>

          <!-- API Integration -->
          <div class="glass bg-white/10 p-6 rounded-xl text-black slide-in-left" style="animation-delay: 200ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center">
                <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold mb-3 text-center">API Integration</h3>
            <p class="text-black/80 text-center text-sm">
              Seamless connectivity with major travel providers and business systems
            </p>
          </div>

          <!-- Real-time Analytics -->
          <div class="glass bg-white/10 p-6 rounded-xl text-black slide-in-left" style="animation-delay: 300ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <svg class="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold mb-3 text-center">Real-time Analytics</h3>
            <p class="text-black/80 text-center text-sm">
              Comprehensive reporting and insights for data-driven decisions
            </p>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="glass bg-white/10 rounded-xl p-8 text-black slide-in-right">
          <h3 class="text-2xl font-bold mb-8 text-center">Our Tech Stack</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-2">🚀</div>
              <h4 class="font-semibold mb-2">Frontend</h4>
              <p class="text-black/80 text-sm">Vue.js, TypeScript, TailwindCSS</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-2">⚡</div>
              <h4 class="font-semibold mb-2">Backend</h4>
              <p class="text-black/80 text-sm">Node.js, Python, GraphQL</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-2">🔒</div>
              <h4 class="font-semibold mb-2">Security</h4>
              <p class="text-black/80 text-sm">OAuth2, JWT, End-to-end encryption</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-2">🌐</div>
              <h4 class="font-semibold mb-2">Infrastructure</h4>
              <p class="text-black/80 text-sm">AWS, Docker, Kubernetes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed
</script>

<style scoped>
.glass {
  backdrop-filter: blur(8px);
}
</style> 