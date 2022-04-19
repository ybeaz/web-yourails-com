import { AxiosRequestHeaders } from 'axios'
import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { IConnector } from '../Interfaces/IConnector'
import { IConnectorOutput } from '../Interfaces/IConnectorOutput'

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const templateConnector: IConnector = () => {
  const queryAst: DocumentNode = gql`
    query SendTemplate($argTemplate: ArgTemplate) {
      sendTemplate(argTemplate: $argTemplate) {
        varOut1
        varOut2
        varOut3
      }
    }
  `
  const query = print(queryAst as DocumentNode)

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'SendTemplate',
      variables: {},
      query, // : `query SendTemplate(){sendTemplate(){} }} fragment ${`...`}`,
    },
    options: { headers: { ...headers } },
    url: `.../graphql`,
  }

  return obj
}
