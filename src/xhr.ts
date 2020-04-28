import { AxiosRequestConfig } from './types/index'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url, headers } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  // data为空时，删除header的配置
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}
