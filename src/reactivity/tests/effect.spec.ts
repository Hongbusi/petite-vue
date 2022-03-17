import { reactive } from '../reactive'
import { effect } from '../effect'

describe('effect', () => {
  it('test', () => {
    let dummy
    const counter = reactive({ num: 0 })
    effect(() => (dummy = counter.num))

    expect(dummy).toBe(0)
    counter.num = 7
    expect(dummy).toBe(7)
  })
})
