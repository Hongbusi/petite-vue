import { h, getCurrentInstance } from '../../lib/petite-vue.esm.js'

export const Foo = {
  setup() {
    const instance = getCurrentInstance()
    console.log('Foo', instance)
  },

  render() {
    const foo = h('p', {}, 'Foo')

    return h('div', {}, [foo])
  }
}
