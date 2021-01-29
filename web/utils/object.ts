import { cloneDeep, isArray, isObject } from 'lodash'

/**
 * 'change-case' の変換メソッドの型総称
 */
export interface ConvertCase {
  (target: string): string
}

export function convertKeyCaseSensitive(
  target: Object,
  converter: ConvertCase
): Object {
  return convertKeyCaseSensitiveInner(cloneDeep(target), converter)
}

function convertKeyCaseSensitiveInner(
  target: Object,
  converter: ConvertCase
): Object {
  if (isArray(target)) {
    target.forEach((t) => convertKeyCaseSensitiveInner(t, converter))
  }

  if (isObject(target)) {
    const _target = target as any // 内容なだけに仕方ない。
    Object.keys(_target).forEach((k) => {
      if (isObject(_target[k]) || isArray(_target[k])) {
        convertKeyCaseSensitiveInner(_target[k], converter)
      }

      const convertedKey = converter(k)
      if (k !== convertedKey) {
        _target[convertedKey] = _target[k]
        delete _target[k]
      }
    })
  }

  return target
}
