<script setup lang="ts">
import { ref, watch } from 'vue'
import DOMPurify from 'dompurify'

const props = defineProps<{
  content: string
}>()

const searchQuery = ref('')
const searchResults = ref<Array<{ text: string; index: number }>>([])
const currentResultIndex = ref(-1)

const sanitizeAndHighlight = (text: string, query: string) => {
  const highlighted = text.replace(
    new RegExp(query, 'gi'),
    match => `<mark class='bg-orange/20 px-1 rounded'>${match}</mark>`
  )
  return DOMPurify.sanitize(highlighted, {
    ALLOWED_TAGS: ['mark'],
    ALLOWED_ATTR: ['class']
  })
}

const search = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    currentResultIndex.value = -1
    return
  }

  const query = searchQuery.value.toLowerCase()
  const results: Array<{ text: string; index: number }> = []
  let searchText = props.content.toLowerCase()
  let lastIndex = 0

  while (true) {
    const index = searchText.indexOf(query, lastIndex)
    if (index === -1) break

    // Get surrounding context (50 chars before and after)
    const start = Math.max(0, index - 50)
    const end = Math.min(searchText.length, index + query.length + 50)
    const context = props.content.slice(start, end)

    results.push({
      text: '...' + context + '...',
      index: index
    })

    lastIndex = index + 1
  }

  searchResults.value = results
  currentResultIndex.value = results.length > 0 ? 0 : -1
}

const navigateResult = (direction: 'next' | 'prev') => {
  if (searchResults.value.length === 0) return

  if (direction === 'next') {
    currentResultIndex.value = (currentResultIndex.value + 1) % searchResults.value.length
  } else {
    currentResultIndex.value = currentResultIndex.value - 1
    if (currentResultIndex.value < 0) {
      currentResultIndex.value = searchResults.value.length - 1
    }
  }

  const result = searchResults.value[currentResultIndex.value]
  const element = document.querySelector(`[data-index="${result.index}"]`)
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

watch(searchQuery, () => {
  search()
})
</script>

<template>
  <div class="glass p-4 mb-6">
    <div class="flex gap-2 mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search content..."
        class="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange"
      />
      <button
        @click="() => navigateResult('prev')"
        :disabled="searchResults.length === 0"
        class="px-4 py-2 bg-orange text-white rounded-lg disabled:opacity-50"
      >
        ↑
      </button>
      <button
        @click="() => navigateResult('next')"
        :disabled="searchResults.length === 0"
        class="px-4 py-2 bg-orange text-white rounded-lg disabled:opacity-50"
      >
        ↓
      </button>
    </div>
    <div v-if="searchResults.length > 0" class="text-sm text-gray-600">
      Result {{ currentResultIndex + 1 }} of {{ searchResults.length }}
    </div>
    <div v-if="searchResults.length > 0" class="mt-4 space-y-2">
      <div
        v-for="(result, index) in searchResults"
        :key="index"
        :class="{ 'bg-orange/10': index === currentResultIndex }"
        class="p-2 rounded cursor-pointer hover:bg-orange/5"
        @click="currentResultIndex = index"
      >
        <div class="text-sm" v-html="sanitizeAndHighlight(result.text, searchQuery)"></div>
      </div>
    </div>
  </div>
</template> 