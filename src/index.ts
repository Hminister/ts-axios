import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
// import {} from '../'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildUrl(url, params)
}

export default axios
