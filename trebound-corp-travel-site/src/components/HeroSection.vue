<template>
  <section class="bg-gradient-to-br from-[#FF7043] to-[#FF8A65] py-36 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 5" :key="i" 
           class="floating-bubble"
           :style="{
             '--delay': `${i * 2}s`,
             '--size': `${100 + i * 20}px`,
             '--start-x': `${i * 20}%`
           }">
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 fade-in glow-text animate-title">
          Revolutionize Corporate Travel
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-12 slide-in-left animate-description">
          Transform your business travel experience with our innovative platform that combines 
          efficiency, cost savings, and seamless management.
        </p>
        <div class="flex justify-center gap-4 mb-16">
          <button class="primary-button bg-white text-[#FF7043] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all transform hover:scale-105 hover:shadow-lg">
            Learn More
          </button>
          <button class="secondary-button bg-[#E64A19] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D84315] transition-all transform hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" 
               :key="stat.value"
               class="stat-card glass bg-white/10 p-6 rounded-xl text-white slide-in-left hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-xl backdrop-blur-lg cursor-pointer"
               :style="{ 'animation-delay': `${index * 100}ms` }"
               @mouseenter="startCount(index)">
            <div class="text-3xl font-bold mb-2 text-white">
              <span>{{ stat.prefix }}</span>
              <span>{{ stat.displayValue }}</span>
              <span>{{ stat.suffix }}</span>
            </div>
            <div class="text-white/90 font-medium">{{ stat.label }}</div>
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
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.4),
               0 0 40px rgba(255, 255, 255, 0.3),
               0 0 60px rgba(255, 255, 255, 0.2);
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
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  left: var(--start-x);
  bottom: -100px;
  animation: float 15s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.5;
  }
  50% {
    transform: translateY(-800px) rotate(180deg);
    opacity: 0.2;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(360deg);
    opacity: 0;
  }
}
</style> 