import { h } from '../../lib/petite-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    const app = h('div', {}, 'App')
    const foo = h(Foo)

    return h('div', {}, [app, foo])
  },

  setup() {
    return {}
  }
}
