import { h } from '../../lib/petite-vue.esm.js'

export const Foo = {
  setup() {
    return {}
  },

  render() {
    const foo = h('p', {}, 'Foo')
    return h('div', {}, [foo])
  }
}
