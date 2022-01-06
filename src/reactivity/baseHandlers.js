const get = createGetter();
const set = createSetter();

function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    track(target, 'get', key);
    if (isObject(res)) {
      // 值也是对象的话，需要嵌套调用 reactive
      // res 就是 target[key]
      // 浅层代理，不需要嵌套
      return shallow ? res : reactive(res);
    }
    return res;
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    // 在触发 set 的时候进行触发依赖
    trigger(traget, 'set', key);
    return result;
  }
}

export const mutableHandlers = {
  get,
  set
}
