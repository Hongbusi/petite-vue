import { h, ref } from '../../lib/petite-vue.esm.js'

const prevChildren = 'old chidlren'
const nextChildren = 'new children'

export default {
  name: 'TextToText',

  setup() {
    const isChange = ref(false)
    window.isChange = isChange

    return {
      isChange
    }
  },

  render() {
    const self = this
    return self.isChange ? h('div', {}, nextChildren) : h('div', {}, prevChildren)
  }
}
