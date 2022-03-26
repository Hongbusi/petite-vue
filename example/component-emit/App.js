import { h } from '../../lib/petite-vue.esm.js'
import { foo } from './Foo.js'

export const App = {
  render() {
    return h('div', {}, [h('div', {}, `h1, ${this.message}`), h(foo, {
      onAdd() {
        console.log('on-add')
      }
    })])
  },

  setup() {
    return {
      message: 'petite-vue'
    }
  }
}
