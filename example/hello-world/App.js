import { h } from '../../lib/petite-vue.esm.js'

export const App = {
  render() {
    return h('div', `Hello, ${this.message}`)
  },

  setup() {
    return {
      message: 'petite-vue'
    }
  }
}
