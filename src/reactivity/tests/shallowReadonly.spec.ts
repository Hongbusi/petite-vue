import { isReadonly, shallowReadonly } from '../reactive'

describe('reactivity/shallowReadonly', () => {
  test('should not make non-reactive preperties reactive', () => {
    const props = shallowReadonly({ n: { foo: 1 } })
    expect(isReadonly(props)).toBe(true)
    expect(isReadonly(props.n)).toBe(false)
  })

  it('should call console.warn when set', () => {
    console.warn = jest.fn()

    const user = shallowReadonly({
      age: 18
    })

    user.age = 19

    expect(console.warn).toBeCalled()
  })
})
