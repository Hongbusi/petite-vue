import { h, provide, inject } from '../../lib/petite-vue.esm.js'

const Consumer = {
  name: 'Inject',

  setup() {
    const foo = inject('foo')
    const bar = inject('bar')
    // const baz = inject('baz', 'default')
    const baz = inject('baz', () => 'default')

    return {
      foo,
      bar,
      baz
    }
  },

  render() {
    return h('div', {}, `foo: ${this.foo} - bar: ${this.bar} - baz: ${this.baz}`)
  }
}

const Provider2 = {
  name: 'Provide',

  setup() {
    provide('foo', 'fooVal2')
    const foo = inject('foo')

    return {
      foo
    }
  },

  render() {
    return h('div', {}, [h('p', {}, `ProvideInject2${this.foo}`), h(Consumer)])
  }
}

const Provider = {
  name: 'Provide',

  setup() {
    provide('foo', 'fooVal')
    provide('bar', 'barVal')
  },

  render() {
    return h('div', {}, [h('p', {}, 'ProvideInject2'), h(Provider2)])
  }
}

export const App = {
  name: 'app',

  setup() {},

  render() {
    return h('div', {}, [h('p', {}, 'demo'), h(Provider)])
  }
}
