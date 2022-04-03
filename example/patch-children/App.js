import { h } from '../../lib/petite-vue.esm.js'
import ArrayToText from './arrayToText.js'
import TextToText from './textToText.js'
import TextToArray from './textToArray.js'
import ArrayToArray from './arrayToArray.js'

export const App = {
  name: 'App',

  setup() {},

  render() {
    return h(
      'div',
      { id: 'root' },
      [
        h('p', {}, 'Hello World'),
        // 老的是 array 新的是 text
        // h(ArrayToText),
        // 老的是 text 新的是 text
        // h(TextToText),
        // 老的是 text 新的是 array
        // h(TextToArray),
        // 老的是 array 新的是 array
        h(ArrayToArray)
      ]
    )
  }
}
