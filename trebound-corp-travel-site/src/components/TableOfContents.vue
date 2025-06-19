<script setup lang="ts">
import { ref } from 'vue'

interface TableItem {
  title: string
  content: string[]
  isOpen: boolean
}

const items = ref<TableItem[]>([
  {
    title: 'Comprehensive corporate travel & Trebound strategic business document',
    content: [],
    isOpen: false
  },
  {
    title: 'Executive strategic analysis and implementation guide',
    content: [],
    isOpen: false
  },
  {
    title: 'Table of contents',
    content: [],
    isOpen: false
  },
  {
    title: 'Executive summary',
    content: [],
    isOpen: false
  },
  {
    title: 'Part I: Market landscape & opportunity analysis',
    content: [],
    isOpen: false
  },
  {
    title: 'Part II: TravelPerk success model analysis',
    content: [],
    isOpen: false
  },
  {
    title: 'Part III: Trebound strategic assessment',
    content: [],
    isOpen: false
  },
  {
    title: 'Part IV: Financial projections & business case',
    content: [],
    isOpen: false
  },
  {
    title: 'Quick reference section',
    content: [],
    isOpen: false
  },
  {
    title: 'Conclusions & strategic recommendations',
    content: [],
    isOpen: false
  },
  {
    title: 'Appendices',
    content: [],
    isOpen: false
  }
])

const toggleItem = (item: TableItem) => {
  item.isOpen = !item.isOpen
}
</script>

<template>
  <div class="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-xl shadow-xl mb-8">
    <h2 class="text-2xl font-bold text-indigo-800 mb-6 fade-in">Table of Contents</h2>
    <div class="space-y-2">
      <div v-for="(item, index) in items" :key="index" 
           class="glass bg-white/80 hover:bg-white/90 rounded-lg transition-all duration-300 slide-in-left"
           :style="{ 'animation-delay': `${index * 100}ms` }">
        <button 
          @click="toggleItem(item)"
          class="w-full px-4 py-3 flex items-center justify-between text-indigo-900 hover:text-indigo-700 transition-colors"
        >
          <span class="text-left">{{ item.title }}</span>
          <svg 
            class="w-5 h-5 transform transition-transform duration-300 text-indigo-600"
            :class="{ 'rotate-180': item.isOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div v-if="item.isOpen" class="px-4 pb-3 space-y-2">
          <div v-for="(subItem, subIndex) in item.content" :key="subIndex"
               class="text-indigo-700 hover:text-indigo-900 pl-4 py-1 border-l-2 border-indigo-200 hover:border-indigo-500 transition-all duration-300">
            {{ subItem }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
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

.glass {
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style> 