import { print } from 'graphql'

import { axiosClient } from './clients/axiosClient'
import { apolloClient } from './clients/apolloClient'

import { ClientHttpType } from '../@types/ClientHttpType'
import { MethodHttpType } from '../@types/MethodHttpType'
import { QueryApolloType } from '../@types/QueryApolloType'
import { graphqlQueries } from './index.graphqlQuery'
import { selectGraphqlHttpClientFlag } from '../FeatureFlags'

export type GetGraphqlResponseAsyncParamsType = {
  queryApolloType: QueryApolloType
  variables: any
  resolveGraphqlName: string
}

export type GetGraphqlResponseAsyncResType = Promise<any>

interface GetGraphqlResponseAsyncType {
  (
    params: GetGraphqlResponseAsyncParamsType,
    options?: { printRes: boolean }
  ): GetGraphqlResponseAsyncResType
}

/**
 * @description Function to getGraphqlResponseAsync
 * @run ts-node src/CommunicationLayer/getGraphqlResponseAsync.ts
 * @import import { getGraphqlResponseAsync } from './CommunicationLayer/getGraphqlResponseAsync'
 */

export const getGraphqlResponseAsync: GetGraphqlResponseAsyncType = async (
  { queryApolloType, variables, resolveGraphqlName },
  options
) => {
  try {
    const clientHttpType = selectGraphqlHttpClientFlag()

    const client: any =
      clientHttpType === ClientHttpType['apolloClient']
        ? apolloClient
        : axiosClient

    const documentNode = graphqlQueries[`${resolveGraphqlName}Gql`]

    const params = {
      operationName: resolveGraphqlName,
      variables,
      query:
        clientHttpType === ClientHttpType['apolloClient']
          ? documentNode
          : print(documentNode),
    }

    let output: any

    if (clientHttpType === ClientHttpType['apolloClient']) {
      const res: any = await client('/graphql')[queryApolloType](params)
      output = res?.data[resolveGraphqlName]
    } else if (clientHttpType === ClientHttpType['axiosClient']) {
      const res: any = await client({
        url: '/graphql',
        data: params,
        method: MethodHttpType['post'],
      })
      output = res?.data?.data[resolveGraphqlName]
    }

    if (options?.printRes) {
      console.log('getGraphqlResponseAsync', 'output', output)
    }

    return output
  } catch (error: any) {
    console.log('getGraphqlResponseAsync', error)
    return
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
