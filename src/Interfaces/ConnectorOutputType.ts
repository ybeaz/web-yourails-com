import { Axios, Method } from 'axios'
import { ApolloClient, DocumentNode } from '@apollo/client'
import { ClientHttpType } from '../@types/ClientHttpType'
import { MethodHttpType } from '../@types/MethodHttpType'

export interface ConnectorOutputType {
  client: any | Axios | ApolloClient<any>
  clientHttpType: ClientHttpType
  methodHttpType: MethodHttpType
  params?: {
    operationName: string
    variables: any
    query: string | DocumentNode
  }
  resolveName: string
}

export type { Method }
