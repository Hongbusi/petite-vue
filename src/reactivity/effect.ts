let activeEffect

class ReactiveEffect {
  private _fn: any

  constructor(fn) {
    this._fn = fn
  }

  run() {
    activeEffect = this
    this._fn()
  }
}

const bucket = new WeakMap()
export function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }

  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }

  deps.add(activeEffect)
}

export function trigget(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  deps && deps.forEach(effect => effect.run())
}

export function effect(fn) {
  const _effect = new ReactiveEffect(fn)
  _effect.run()
}
