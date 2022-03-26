import { h, createTextVNode } from '../../lib/petite-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    const app = h('div', {}, 'App')
    const foo = h(
      Foo,
      {},
      {
        header: ({ age }) => [
          h('p', {}, `header${age}`),
          createTextVNode('hello world')
        ],
        footer: () => h('p', {}, 'footer')
      }
    )

    return h('div', {}, [app, foo])
  },

  setup() {
    return {}
  }
}
