import { h } from '../../lib/petite-vue.esm.js'

export default {
  name: 'Child',

  setup() {},

  render(props) {
    return h('div', {}, [h('div', {}, `Child - props - message: ${this.$props.message}`)])
  }
}
