import { h } from '../../lib/petite-vue.esm.js'

export const foo = {
  setup(props) {
    console.log(props)
  },

  render() {
    return h('div', {}, `foo, ${this.count}`)
  }
}
