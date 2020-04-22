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
  methods?: methods
  data?: any
  params?: any
}