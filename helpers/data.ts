import { isPlainObject } from './util'

export function tranfomRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
