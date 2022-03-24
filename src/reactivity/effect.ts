import { extend } from '../shared'

let activeEffect
let shouldTrack = false

export class ReactiveEffect {
  private _fn: any
  deps = []
  active = true
  onStop?: () => void
  public scheduler: Function | undefined

  constructor(fn, scheduler?: Function) {
    this._fn = fn
    this.scheduler = scheduler
  }

  run() {
    if (!this.active) {
      return this._fn()
    }

    shouldTrack = true
    activeEffect = this

    const result = this._fn()
    shouldTrack = false

    return result
  }

  stop() {
    if (this.active) {
      cleanupEffect(this)
      if (this.onStop) {
        this.onStop()
      }
      this.active = false
    }
  }
}

function cleanupEffect(effect) {
  effect.deps.forEach((dep: any) => {
    dep.delete(effect)
  })
}

const bucket = new WeakMap()
export function track(target, key) {
  if (!isTracking()) return

  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }

  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }

  trackEffects(deps)
}

export function trackEffects(deps) {
  if (deps.has(activeEffect)) return

  deps.add(activeEffect)
  activeEffect.deps.push(deps)
}

export function isTracking() {
  return shouldTrack && activeEffect !== undefined
}

export function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  triggerEffects(deps)
}

export function triggerEffects(deps) {
  deps && deps.forEach((effect) => {
    if (effect.scheduler) {
      effect.scheduler()
    }
    else {
      effect.run()
    }
  })
}

export function effect(fn, options: any = {}) {
  const _effect = new ReactiveEffect(fn, options.scheduler)

  extend(_effect, options)

  _effect.run()

  const runner: any = _effect.run.bind(_effect)

  runner.effect = _effect

  return runner
}

export function stop(runner) {
  runner.effect.stop()
}
