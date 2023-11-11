import { axiosClient } from './clients/axiosClient'
import { apolloClient } from './clients/apolloClient'

import { ClientHttpType } from '../@types/ClientHttpType'
import { MethodHttpType } from '../@types/MethodHttpType'
import { graphqlQueries } from './index.graphqlQuery'

export type GetGraphqlResponseAsyncParamsType = {
  clientHttpType: ClientHttpType
  methodHttpType: MethodHttpType
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
  { clientHttpType, methodHttpType, variables, resolveGraphqlName },
  options
) => {
  try {
    const client =
      clientHttpType === ClientHttpType['apolloClient']
        ? apolloClient
        : axiosClient

    const { operationName, documentNode, documentNodePrinted } =
      graphqlQueries[resolveGraphqlName]

    const params = {
      operationName,
      variables,
      query:
        clientHttpType === ClientHttpType['apolloClient']
          ? documentNode
          : documentNodePrinted,
    }

    let output: any

    if (clientHttpType === ClientHttpType['apolloClient']) {
      const res: any = await client[methodHttpType](params)
      output = res?.data[resolveGraphqlName]
    } else if (clientHttpType === ClientHttpType['axiosClient']) {
      const res: any = await client[methodHttpType]('', params)
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
