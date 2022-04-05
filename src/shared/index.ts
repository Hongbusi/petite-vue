export * from './toDisplayString'

export const extend = Object.assign

export const EMPTY_OBJ = {}

export const isObject = (value) => {
  return value !== null && typeof value === 'object'
}

export const isString = (value) => {
  return typeof value === 'string'
}

export const hasChanged = (value, newValue) => {
  return !Object.is(value, newValue)
}

export const hasOwn = (value, key) => Object.prototype.hasOwnProperty.call(value, key)

export const camelize = (str) => {
  return str.replace(/-(\w)/g, (_, c) => {
    return c ? c.toUpperCase() : ''
  })
}

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export const toHandlerKey = str => str ? `on${capitalize(str)}` : ''
