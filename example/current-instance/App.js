import { h, getCurrentInstance } from '../../lib/petite-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    return h('div', {}, [h('p', {}, 'currentInstance demo'), h(Foo)])
  },

  setup() {
    const instance = getCurrentInstance()
    console.log(instance)
  }
}
