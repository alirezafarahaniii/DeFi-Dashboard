/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'
import axios from './api/axios'


const app = createApp(App)
app.use(createPinia())
app.use(axios, {
    baseUrl: 'https://cataas.com/',
})

registerPlugins(app)

app.mount('#app')
