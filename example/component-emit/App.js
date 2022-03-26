import { h } from '../../lib/petite-vue.esm.js'
import { foo } from './Foo.js'

window.self = null
export const App = {
  render() {
    window.self = this
    return h(
      'div',
      {},
      [h('div', {}, `h1, ${this.message}`), h(foo, { count: 1 })]
    )
  },

  setup() {
    return {
      message: 'petite-vue'
    }
  }
}
