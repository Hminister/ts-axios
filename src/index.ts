import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildUrl } from '../helpers/url'
import { tranfomRequest } from '../helpers/data'
import { processHeaders } from '../helpers/header'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.headers = tranfomHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildUrl(url, params)
}
function transformRequestData(config: AxiosRequestConfig) {
  return tranfomRequest(config.data)
}

function tranfomHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
