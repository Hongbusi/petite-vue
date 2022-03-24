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
