<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import TableOfContents from './TableOfContents.vue'
import SearchContent from './SearchContent.vue'
import AccordionSection from './AccordionSection.vue'

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false
})

// Configure DOMPurify
DOMPurify.setConfig({
  ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'strong', 'em', 'code', 'pre', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
  ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'id']
})

const markdownContent = ref('')
const parsedContent = ref('')
const sections = ref<Array<{ title: string; content: string; subsections: Array<{ title: string; content: string }> }>>([])

const processMarkdownIntoSections = (content: string) => {
  const lines = content.split('\n')
  let currentSection = { title: '', content: '', subsections: [] }
  let currentSubsection = { title: '', content: '' }
  let buffer = []

  for (const line of lines) {
    if (line.startsWith('# ')) {
      if (currentSection.title) {
        sections.value.push({ ...currentSection })
      }
      currentSection = { title: line.slice(2), content: '', subsections: [] }
    } else if (line.startsWith('## ')) {
      if (currentSubsection.title) {
        currentSection.subsections.push({ ...currentSubsection })
      }
      currentSubsection = { title: line.slice(3), content: '' }
    } else {
      if (currentSubsection.title) {
        currentSubsection.content += line + '\n'
      } else {
        currentSection.content += line + '\n'
      }
    }
  }

  // Push the last section and subsection
  if (currentSubsection.title) {
    currentSection.subsections.push(currentSubsection)
  }
  if (currentSection.title) {
    sections.value.push(currentSection)
  }
}

onMounted(async () => {
  try {
    const response = await fetch('/COMPREHENSIVE_CORPORATE_TRAVEL_TREBOUND_STRATEGIC_BUSINESS_DOCUMENT.md')
    markdownContent.value = await response.text()
    // Sanitize HTML after markdown conversion
    parsedContent.value = DOMPurify.sanitize(marked(markdownContent.value))
    processMarkdownIntoSections(markdownContent.value)
  } catch (error) {
    console.error('Error loading markdown content:', error)
  }
})

const accordionItems = computed(() => 
  sections.value.map(section => ({
    title: section.title,
    content: DOMPurify.sanitize(marked(section.content)),
    subsections: section.subsections.map(sub => ({
      title: sub.title,
      content: DOMPurify.sanitize(marked(sub.content))
    }))
  }))
)
</script>

<template>
  <section class="py-16 bg-surface-light min-h-screen">
    <div class="container mx-auto px-4">
      <div class="flex gap-8">
        <!-- Sidebar with Table of Contents -->
        <aside class="w-1/4">
          <div class="sticky top-20">
            <TableOfContents />
          </div>
        </aside>

        <!-- Main Content -->
        <div class="w-3/4 space-y-8">
          <!-- Search Bar -->
          <SearchContent :content="markdownContent" />

          <!-- Accordion Sections -->
          <div class="space-y-6">
            <div v-for="(section, index) in accordionItems" :key="index">
              <AccordionSection 
                :items="[{ title: section.title, content: section.content }]" 
              />
              <div class="ml-6 mt-2" v-if="section.subsections.length">
                <AccordionSection 
                  :items="section.subsections"
                  class="border-l-2 border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.prose {
  @apply max-w-none;
}

.prose h1 {
  @apply text-3xl font-bold mb-6 text-secondary-dark;
}

.prose h2 {
  @apply text-2xl font-semibold mb-4 text-secondary;
}

.prose h3 {
  @apply text-xl font-medium mb-3 text-secondary;
}

.prose p {
  @apply text-secondary-dark/80 mb-4 leading-relaxed;
}

.prose ul {
  @apply list-disc list-inside mb-4;
}

.prose ol {
  @apply list-decimal list-inside mb-4;
}

.prose li {
  @apply mb-2;
}

.prose a {
  @apply text-primary-500 hover:text-primary-700 transition-colors;
}

.prose blockquote {
  @apply border-l-4 border-primary-200 pl-4 italic my-4;
}

.prose code {
  @apply bg-surface-dark rounded px-2 py-1 text-sm;
}

.prose pre {
  @apply bg-surface-dark rounded p-4 overflow-x-auto;
}

.prose table {
  @apply w-full border-collapse mb-4;
}

.prose th,
.prose td {
  @apply border border-gray-200 px-4 py-2;
}

.prose th {
  @apply bg-surface-dark;
}
</style> 