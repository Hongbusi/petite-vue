import { h } from '../../lib/petite-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    return h('div', {}, [h('p', {}, 'currentInstance demo'), h(Foo)])
  },

  setup() {
    return {}
  }
}
