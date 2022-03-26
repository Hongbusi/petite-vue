import { h } from '../../lib/petite-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    return h('div', {}, [h('div', {}, `h1, ${this.message}`), h(Foo, {
      onAdd(a, b) {
        console.log('on-add', a, b)
      },
      onAddFoo() {
        console.log('on-add-foo')
      }
    })])
  },

  setup() {
    return {
      message: 'petite-vue'
    }
  }
}
