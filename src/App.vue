<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import MarketAnalysis from './components/MarketAnalysis.vue'
import FinancialProjections from './components/FinancialProjections.vue'
import StrategicInsights from './components/StrategicInsights.vue'
import TechnologyExcellence from './components/TechnologyExcellence.vue'
import ImplementationRoadmap from './components/ImplementationRoadmap.vue'
import DetailedContent from './components/DetailedContent.vue'
import CallToAction from './components/CallToAction.vue'
import { initializeAnimations } from './utils/animations'

onMounted(() => {
  initializeAnimations()
})
</script>

<template>
  <div class="min-h-screen w-full m-0 p-0 overflow-x-hidden">
    <Navigation />
    
    <!-- Main Content -->
    <main class="w-full m-0 p-0">
      <!-- Content Sections -->
      <div class="w-full m-0 p-0">
        <HeroSection />
        <MarketAnalysis />
        <FinancialProjections />
        <StrategicInsights />
        <TechnologyExcellence />
        <ImplementationRoadmap />
        <DetailedContent />
        <CallToAction />
      </div>
    </main>
  </div>
</template>

<style>
/* Reset default margins and padding */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --app-height: 100%;
}

html {
  width: 100%;
  height: var(--app-height);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  width: 100%;
  min-height: var(--app-height);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  min-height: var(--app-height);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slideInRight 0.5s ease-out forwards;
}

@keyframes slideInRight {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.glass {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
