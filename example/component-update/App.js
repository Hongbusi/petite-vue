import { h, ref } from '../../lib/petite-vue.esm.js'

import Child from './Child.js'

export const App = {
  name: 'App',

  setup() {
    const message = ref('123')
    const count = ref(0)

    window.message = message

    const changeChildProps = () => {
      message.value = '456'
    }

    const changeCount = () => {
      count.value++
    }

    return {
      message,
      count,
      changeChildProps,
      changeCount
    }
  },

  render() {
    return h(
      'div',
      {},
      [
        h('div', {}, 'Hello World!'),
        h('button', { onClick: this.changeChildProps }, 'Change Child Props'),
        h(Child, { message: this.message }),
        h('button', { onClick: this.changeCount }, 'Change Count'),
        h('div', {}, `Count: ${this.count}`)
      ]
    )
  }
}
