<template>
  <section class="bg-gradient-to-br from-purple-600 to-pink-500 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-12 text-center fade-in">
          Financial Projections
        </h2>

        <!-- Financial Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="glass bg-white/10 p-8 rounded-xl text-black slide-in-left">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-4 text-center">Revenue Growth</h3>
            <div class="text-3xl font-bold mb-2 text-center">$23M+</div>
            <p class="text-black/80 text-center">Year 3 Projection</p>
          </div>

          <div class="glass bg-white/10 p-8 rounded-xl text-black slide-in-left" style="animation-delay: 100ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-4 text-center">Break-even</h3>
            <div class="text-3xl font-bold mb-2 text-center">18-24</div>
            <p class="text-black/80 text-center">Months</p>
          </div>

          <div class="glass bg-white/10 p-8 rounded-xl text-black slide-in-left" style="animation-delay: 200ms;">
            <div class="flex items-center justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-500 flex items-center justify-center">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-4 text-center">IRR</h3>
            <div class="text-3xl font-bold mb-2 text-center">156%</div>
            <p class="text-black/80 text-center">Internal Rate of Return</p>
          </div>
        </div>

        <!-- Projections Table -->
        <div class="glass bg-white/10 rounded-xl p-8 overflow-hidden slide-in-right">
          <h3 class="text-2xl font-bold text-black mb-6">5-Year Financial Forecast</h3>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-4 px-4 text-black/90 font-semibold">Year</th>
                  <th class="text-left py-4 px-4 text-black/90 font-semibold">Revenue</th>
                  <th class="text-left py-4 px-4 text-black/90 font-semibold">Growth</th>
                  <th class="text-left py-4 px-4 text-black/90 font-semibold">EBITDA</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td class="py-4 px-4 text-black">Year 1</td>
                  <td class="py-4 px-4 text-black/80">$5M</td>
                  <td class="py-4 px-4 text-black/80">-</td>
                  <td class="py-4 px-4 text-black/80">-$2M</td>
                </tr>
                <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td class="py-4 px-4 text-black">Year 2</td>
                  <td class="py-4 px-4 text-black/80">$12M</td>
                  <td class="py-4 px-4 text-black/80">140%</td>
                  <td class="py-4 px-4 text-black/80">$1M</td>
                </tr>
                <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td class="py-4 px-4 text-black">Year 3</td>
                  <td class="py-4 px-4 text-black/80">$23M</td>
                  <td class="py-4 px-4 text-black/80">92%</td>
                  <td class="py-4 px-4 text-black/80">$5M</td>
                </tr>
                <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td class="py-4 px-4 text-black">Year 4</td>
                  <td class="py-4 px-4 text-black/80">$38M</td>
                  <td class="py-4 px-4 text-black/80">65%</td>
                  <td class="py-4 px-4 text-black/80">$11M</td>
                </tr>
                <tr class="hover:bg-white/5 transition-colors">
                  <td class="py-4 px-4 text-black">Year 5</td>
                  <td class="py-4 px-4 text-black/80">$58M</td>
                  <td class="py-4 px-4 text-black/80">53%</td>
                  <td class="py-4 px-4 text-black/80">$19M</td>
                </tr>
              </tbody>
            </table>
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