import { reactive, isReactive } from '../reactive'

describe('reactivity/reactive', () => {
  it('test', () => {
    const original = { foo: 1 }
    const observed = reactive(original)
    expect(observed).not.toBe(original)
    expect(observed.foo).toBe(1)
    expect(isReactive(observed)).toBe(true)
    expect(isReactive(original)).toBe(false)
  })
})
