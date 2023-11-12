import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  DefaultOptions,
} from '@apollo/client'

const headers: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: `${+new Date()}`,
}

import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { SERVERS_MAIN, ServersType } from '../../Constants/servers.const'

const envType: string = getDetectedEnv()

const baseURL = SERVERS_MAIN[envType as keyof ServersType] as string

const createHttpLink = (pathname: string): HttpLink => {
  return new HttpLink({
    uri: `${baseURL}${pathname}`,
    headers,
  })
}

export const createApolloClient = (
  pathname: string
): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink(pathname)

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultOptions,
  })
}

export const apolloClient: any = (pathname: string) =>
  createApolloClient(pathname)
