import { h } from '../../lib/petite-vue.esm.js'

export const foo = {
  setup(props) {
    const emitAdd = () => {
      console.log('emit add')
    }

    return {
      emitAdd
    }
  },

  render() {
    const btn = h('button', { onClick: this.emitAdd }, 'emitAdd')
    const foo = h('p', {}, 'foo')
    return h('div', {}, [btn, foo])
  }
}
