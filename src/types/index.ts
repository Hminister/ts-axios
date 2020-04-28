import { exec } from 'child_process'

// 定义methods合法类型
export type methods =
  | 'get'
  | 'get'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: methods
  headers?: any
  data?: any
  params?: any
  //request 中指定响应的数据类型
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  heades: any
  config: AxiosRequestConfig
  request: any
}

//resolve AxiosResponse
export interface AxiosPromise extends Promise<AxiosResponse> {}
