<script setup lang="ts">
import { ref } from 'vue'

interface AccordionItem {
  title: string;
  content: string;
  isOpen?: boolean;
}

const props = defineProps<{
  items: AccordionItem[];
  category?: string;
}>()

const openItems = ref<Set<number>>(new Set())

const toggleItem = (index: number) => {
  if (openItems.value.has(index)) {
    openItems.value.delete(index)
  } else {
    openItems.value.add(index)
  }
}
</script>

<template>
  <div class="bg-surface rounded-xl overflow-hidden">
    <h3 v-if="category" class="text-xl font-semibold text-secondary mb-4 px-6 pt-6">
      {{ category }}
    </h3>
    <div class="divide-y divide-gray-200">
      <div v-for="(item, index) in items" :key="index" class="transition-all duration-200">
        <button
          @click="toggleItem(index)"
          class="w-full px-6 py-4 flex justify-between items-center hover:bg-surface-light transition-colors"
          :class="{ 'bg-surface-light': openItems.has(index) }"
        >
          <span class="text-lg font-medium text-secondary">{{ item.title }}</span>
          <svg
            class="w-5 h-5 transform transition-transform"
            :class="{ 'rotate-180': openItems.has(index) }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          v-show="openItems.has(index)"
          class="px-6 py-4 bg-white prose prose-sm max-w-none"
          v-html="item.content"
        ></div>
      </div>
    </div>
  </div>
</template> 