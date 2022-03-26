import { h } from '../../lib/petite-vue.esm.js'
import { foo } from './Foo.js'

window.self = null
export const App = {
  render() {
    window.self = this
    return h(
      'div', {
        id: 'root',
        class: ['red', 'bg-green'],
        onClick() {
          console.log('click')
        },
        onMousedown() {
          console.log('mousedown')
        }
      },
      [h('div', {}, `h1, ${this.message}`), h(foo, { count: 1 })]
      // `h1, ${this.message}`
      // [h('p', { class: 'red' }, 'Hello World'), h('p', { class: 'green' }, 'Hello World')]
    )
  },

  setup() {
    return {
      message: 'petite-vue'
    }
  }
}
