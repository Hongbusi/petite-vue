import { h } from '../../lib/petite-vue.esm.js'

export const App = {
  render() {
    return h(
      'div', {
        id: 'root',
        class: ['red', 'bg-green']
      },
      [h('p', { class: 'red' }, 'Hello World'), h('p', { class: 'green' }, 'Hello World')]
    )
  },

  setup() {
    return {
      message: 'petite-vue'
    }
  }
}
