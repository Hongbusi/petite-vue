import { ref } from '../../lib/petite-vue.esm.js'

export const App = {
  name: 'App',

  template: '<div>hi, {{ message }}, count: {{ count }} </div>',

  setup() {
    const count = ref(0)

    window.count = count
    return {
      count,
      message: 'petite-vue'
    }
  }
}
