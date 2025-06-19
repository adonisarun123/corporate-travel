import { createApp } from 'vue'
import App from './App.vue'

// Import global styles
import './style.css'
import './assets/main.css'

// Create Vue app
const app = createApp(App)

// Error handling
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

app.config.warnHandler = (msg, instance, trace) => {
  console.warn('Global warning:', msg)
  console.warn('Warning trace:', trace)
}

// Mount app
app.mount('#app')
