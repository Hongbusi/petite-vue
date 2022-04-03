import { h, ref } from '../../lib/petite-vue.esm.js'

export const App = {
  name: 'App',

  setup() {
    const count = ref(0)

    function onClick() {
      for (let i = 0; i < 100; i++) {
        console.log('update')
        count.value = i
      }
    }

    return {
      count,
      onClick
    }
  },

  render() {
    const button = h('button', { onClick: this.onClick }, 'update')
    const p = h('p', {}, `count: ${this.count}`)

    return h('div', {}, [button, p])
  }
}
