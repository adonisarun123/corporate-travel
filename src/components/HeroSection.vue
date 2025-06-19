<template>
  <section class="full-bleed relative bg-gradient-to-br from-[#FF7043] to-[#FF8A65] py-36 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 w-full h-full overflow-hidden">
      <div v-for="i in 5" :key="i" 
           class="floating-bubble absolute"
           :style="{
             '--delay': `${i * 2}s`,
             '--size': `${100 + i * 20}px`,
             '--start-x': `${i * 20}%`
           }">
      </div>
    </div>

    <!-- Content Container -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 fade-in glow-text">
          Revolutionize Corporate Travel
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-12 slide-in-left">
          Transform your business travel experience with our innovative platform that combines 
          efficiency, cost savings, and seamless management.
        </p>

        <!-- CTA Buttons -->
        <div class="flex justify-center gap-6 mb-16">
          <button class="px-8 py-3 bg-white text-[#FF7043] rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            Learn More
          </button>
          <button class="px-8 py-3 bg-[#FF5722] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="glass bg-white/10 p-6 rounded-xl text-white slide-in-left hover:bg-white/15 transition-all backdrop-blur-lg border border-white/10">
            <div class="text-3xl font-bold mb-2">$728B</div>
            <div class="text-white/90">Business Travel Market</div>
          </div>
          <div class="glass bg-white/10 p-6 rounded-xl text-white slide-in-left hover:bg-white/15 transition-all backdrop-blur-lg border border-white/10" style="animation-delay: 100ms;">
            <div class="text-3xl font-bold mb-2">15.2%</div>
            <div class="text-white/90">Growth Rate</div>
          </div>
          <div class="glass bg-white/10 p-6 rounded-xl text-white slide-in-left hover:bg-white/15 transition-all backdrop-blur-lg border border-white/10" style="animation-delay: 200ms;">
            <div class="text-3xl font-bold mb-2">30%</div>
            <div class="text-white/90">Cost Reduction</div>
          </div>
          <div class="glass bg-white/10 p-6 rounded-xl text-white slide-in-left hover:bg-white/15 transition-all backdrop-blur-lg border border-white/10" style="animation-delay: 300ms;">
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-white/90">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Stat {
  value: number
  displayValue: number | string
  prefix: string
  suffix: string
  label: string
  duration: number
}

const stats = ref<Stat[]>([
  { value: 728, displayValue: 0, prefix: '$', suffix: 'B', label: 'Business Travel Market', duration: 2000 },
  { value: 15.2, displayValue: 0, prefix: '', suffix: '%', label: 'Growth Rate', duration: 1500 },
  { value: 30, displayValue: 0, prefix: '', suffix: '%', label: 'Cost Reduction', duration: 1500 },
  { value: 24, displayValue: '24/7', prefix: '', suffix: '', label: 'Support Available', duration: 1000 }
])

const startCount = (index: number) => {
  const stat = stats.value[index]
  if (typeof stat.value === 'number' && stat.displayValue === 0) {
    animate(index)
  }
}

const animate = (index: number) => {
  const stat = stats.value[index]
  const steps = 20
  const increment = stat.value / steps
  let current = 0
  const interval = stat.duration / steps

  const timer = setInterval(() => {
    current += increment
    if (current >= stat.value) {
      stats.value[index].displayValue = stat.value
      clearInterval(timer)
    } else {
      stats.value[index].displayValue = Number(current.toFixed(1))
    }
  }, interval)
}

onMounted(() => {
  // Trigger initial animations after a delay
  setTimeout(() => {
    stats.value.forEach((_, index) => startCount(index))
  }, 1000)
})
</script>

<style scoped>
.glass {
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glow-text {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.primary-button, .secondary-button {
  position: relative;
  overflow: hidden;
}

.primary-button::after, .secondary-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
}

.primary-button:hover::after, .secondary-button:hover::after {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.animate-title {
  animation: fadeInUp 1s ease-out;
}

.animate-description {
  animation: fadeInUp 1s ease-out 0.3s backwards;
}

.stat-card {
  animation: fadeInUp 0.5s ease-out backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.floating-bubble {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 50%;
  left: var(--start-x);
  bottom: -100px;
  animation: float 15s ease-in-out infinite;
  animation-delay: var(--delay);
  pointer-events: none;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: translateY(-60vh) rotate(180deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-120vh) rotate(360deg);
    opacity: 0;
  }
}
</style> 