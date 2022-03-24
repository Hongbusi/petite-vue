import { createApp } from '../../lib/petite-vue.esm.js'
import { App } from './App.js'

const rootContainer = document.querySelector('#app')
createApp(App).mount(rootContainer)
