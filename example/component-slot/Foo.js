import { h, renderSlots } from '../../lib/petite-vue.esm.js'

export const Foo = {
  setup() {
    return {}
  },

  render() {
    const foo = h('p', {}, 'Foo')

    console.log(this.$slots)
    return h('div', {}, [
      renderSlots(this.$slots, 'header', { age: 123 }),
      foo,
      renderSlots(this.$slots, 'footer')
    ])
  }
}
