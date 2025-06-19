<template>
  <section class="bg-gradient-to-br from-blue-600 to-indigo-500 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-12 text-center fade-in">
          Market Analysis
        </h2>
        
        <!-- Market Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <!-- Market Size -->
          <div class="glass bg-white/40 p-8 rounded-xl text-black slide-in-left hover:bg-white/50 transition-colors">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div class="text-4xl font-bold mb-2 text-center text-black">$728B</div>
            <p class="text-black font-semibold text-center">Business Travel Market</p>
          </div>

          <!-- Growth Rate -->
          <div class="glass bg-white/40 p-8 rounded-xl text-black slide-in-left hover:bg-white/50 transition-colors" style="animation-delay: 100ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div class="text-4xl font-bold mb-2 text-center text-black">15.2%</div>
            <p class="text-black font-semibold text-center">Growth Rate</p>
          </div>

          <!-- Cost Reduction -->
          <div class="glass bg-white/40 p-8 rounded-xl text-black slide-in-left hover:bg-white/50 transition-colors" style="animation-delay: 200ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div class="text-4xl font-bold mb-2 text-center text-black">30%</div>
            <p class="text-black font-semibold text-center">Cost Reduction</p>
          </div>

          <!-- Support -->
          <div class="glass bg-white/40 p-8 rounded-xl text-black slide-in-left hover:bg-white/50 transition-colors" style="animation-delay: 300ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="text-4xl font-bold mb-2 text-center text-black">24/7</div>
            <p class="text-black font-semibold text-center">Support Available</p>
          </div>
        </div>

        <!-- Market Trends -->
        <div class="glass bg-white/40 rounded-xl p-8 text-black slide-in-right">
          <h3 class="text-2xl font-bold mb-8 text-center text-black">Key Market Trends</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-black font-medium">Rise of bleisure travel</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-black font-medium">Sustainability considerations</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-black font-medium">Mobile-first booking experience</span>
              </div>
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.4);
}

.glass:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style> 