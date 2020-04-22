import { AxiosRequestConfig } from './types/index'
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, methods = 'get', url } = config
  const request = new XMLHttpRequest()
  request.open(methods.toUpperCase(), url, async:true)
  request.send(data)
}
