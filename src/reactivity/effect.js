let activeEffect = null;
const targetMap = new WeakMap();

export function effect(fn, options = {}) {
  const effectFn = () => {
    try {
      activeEffect = effectFn;
      return fn();
    } finally {
      activeEffect = null;
    }
  }
  if (!options.lazy) {
    effectFn();
  }

  effectFn.scheduler = options.scheduler;
  return effectFn;
}

export function track(target, type, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set();
  }
  if (!deps.has(activeEffect) && activeEffect) {
    deps.add(activeEffect);
  }
  depsMap.set(key, deps);
}

export function trigger(target, type, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }

  const deps = depsMap.get(key);
  if (!deps) {
    return;
  }

  deps.forEach((effectFn) => {
    if (effectFn.scheduler) {
      effectFn.scheduler();
    } else {
      effectFn();
    }
  });
}
