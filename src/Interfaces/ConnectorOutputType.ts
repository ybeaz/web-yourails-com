import { Axios, Method } from 'axios'
import { ApolloClient, DocumentNode } from '@apollo/client'
import { ClientHttpType } from '../@types/ClientHttpType'

export interface ConnectorOutputType {
  client: any | Axios | ApolloClient<any>
  clientType: ClientHttpType
  params?: {
    operationName: string
    variables: any
    query: string | DocumentNode
  }
}

export type { Method }
