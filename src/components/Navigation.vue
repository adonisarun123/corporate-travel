<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF7043] to-[#FF8A65] shadow-lg backdrop-blur-sm bg-opacity-90">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-white text-2xl font-bold tracking-wider">
            Trebound
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-white hover:text-white/80 transition-colors duration-200">Home</a>
          <a href="#" class="text-white hover:text-white/80 transition-colors duration-200">Insights</a>
          <a href="#" class="text-white hover:text-white/80 transition-colors duration-200">Market</a>
          <a href="#" class="text-white hover:text-white/80 transition-colors duration-200">Financials</a>
          <a href="#" class="text-white hover:text-white/80 transition-colors duration-200">Roadmap</a>
          <a href="#" class="text-white hover:text-white/80 transition-colors duration-200">Tech</a>
        </div>

        <!-- Contact Button -->
        <div>
          <button class="bg-white text-[#FF7043] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            Contact
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-white hover:text-white/80 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#" class="block text-white hover:text-white/80 transition-colors duration-200 py-2">Home</a>
          <a href="#" class="block text-white hover:text-white/80 transition-colors duration-200 py-2">Insights</a>
          <a href="#" class="block text-white hover:text-white/80 transition-colors duration-200 py-2">Market</a>
          <a href="#" class="block text-white hover:text-white/80 transition-colors duration-200 py-2">Financials</a>
          <a href="#" class="block text-white hover:text-white/80 transition-colors duration-200 py-2">Roadmap</a>
          <a href="#" class="block text-white hover:text-white/80 transition-colors duration-200 py-2">Tech</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.nav-blur {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style> 