import { axiosClient } from './clients/axiosClient'
import { ConnectorOutputType } from '../Interfaces/ConnectorOutputType'
import { getRefreshedUserAuthAwsCognitoQuery } from './graphql/getRefreshedUserAuthAwsCognitoQuery'

interface ConnectorType {
  (variables: any): ConnectorOutputType
}

/**
 * @description Function to return getRefreshedUserAuthAwsCognitoConnector
 * @import import { getRefreshedUserAuthAwsCognitoConnector } from '../../CommunicationLayer/getRefreshedUserAuthAwsCognitoConnector'
 */
export const getRefreshedUserAuthAwsCognitoConnector: ConnectorType =
  variables => {
    const obj: ConnectorOutputType = {
      client: axiosClient,
      params: {
        operationName: 'GetRefreshedUserAuthAwsCognito',
        variables,
        query: getRefreshedUserAuthAwsCognitoQuery,
      },
    }

    return obj
  }
