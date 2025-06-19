<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent',
      isScrolled ? 'py-4' : 'py-6'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <span class="text-2xl font-bold" :class="isScrolled ? 'text-primary' : 'text-white'">
            Trebound
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="(item, index) in ['Home', 'Insights', 'Market', 'Financials', 'Roadmap', 'Tech']"
            :key="index"
            :href="'#' + item.toLowerCase()"
            class="font-medium transition-colors"
            :class="isScrolled ? 'text-secondary hover:text-primary' : 'text-white/80 hover:text-white'"
          >
            {{ item }}
          </a>
          <a
            href="#contact"
            class="px-6 py-2 rounded-lg font-medium transition-colors"
            :class="isScrolled ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white text-primary hover:bg-white/90'"
          >
            Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden"
          :class="isScrolled ? 'text-secondary' : 'text-white'"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
      >
        <a
          v-for="(item, index) in ['Home', 'Insights', 'Market', 'Financials', 'Roadmap', 'Tech', 'Contact']"
          :key="index"
          :href="'#' + item.toLowerCase()"
          class="block px-4 py-2 text-secondary hover:bg-surface-light hover:text-primary transition-colors"
          @click="isMobileMenuOpen = false"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
nav {
  height: 64px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
@media (max-width: 768px) {
  ul {
    flex-direction: column;
    background: rgba(255,255,255,0.95);
    position: absolute;
    top: 64px;
    left: 0;
    width: 100vw;
    display: none;
  }
}
</style> 