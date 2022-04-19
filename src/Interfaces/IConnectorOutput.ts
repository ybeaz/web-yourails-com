import { AxiosRequestHeaders } from 'axios'
export interface IConnectorOutput {
  testCapture: string
  method: string
  payload?: {
    operationName: string
    variables: any
    query: string
  }
  options: { headers: AxiosRequestHeaders }
  url: string
}
