import { h } from '../../lib/petite-vue.esm.js'

window.self = null
export const App = {
  render() {
    window.self = this
    return h(
      'div', {
        id: 'root',
        class: ['red', 'bg-green']
      },
      `h1, ${this.message}`
      // [h('p', { class: 'red' }, 'Hello World'), h('p', { class: 'green' }, 'Hello World')]
    )
  },

  setup() {
    return {
      message: 'petite-vue'
    }
  }
}
