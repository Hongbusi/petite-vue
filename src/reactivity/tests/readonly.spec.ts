import { readonly, isReadonly } from '../reactive'

describe('reactivity/readonly', () => {
  it('should make nested values readonly', () => {
    const original = { foo: 1, bar: { baz: 2 } }
    const wrapped = readonly(original)
    expect(wrapped).not.toBe(original)
    expect(isReadonly(wrapped)).toBe(true)
    expect(isReadonly(original)).toBe(false)
    expect(isReadonly(wrapped.bar)).toBe(true)
    expect(isReadonly(original.bar)).toBe(false)
    expect(wrapped.foo).toBe(1)
  })

  it('warn then call set', () => {
    console.warn = jest.fn()

    const user = readonly({
      age: 18
    })

    user.age = 19

    expect(console.warn).toBeCalled()
  })
})
