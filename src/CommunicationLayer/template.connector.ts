import axios from 'axios'
import { print } from 'graphql'

import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'
import { SERVERS, IServer } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { GetRecipeDocument } from '../types/graphql'

interface ITemplateConnector {
  (variables: any): IConnectorOutput
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const templateConnector: ITemplateConnector = variables => {
  const envType: string = getDetectedEnv()
  console.info('template.connector [24]', { variables })

  const baseURL = SERVERS[envType as keyof IServer] as string
  const { timeout } = SERVERS

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: `${baseURL}/graphql`,
      timeout,
      headers,
    }),
    method: 'post',
    params: {
      operationName: 'GetRecipe',
      variables,
      query: print(GetRecipeDocument),
      // query: `query SendTemplate(){sendTemplate(){} }} fragment ${FRAGMENTS_STRINGS['TemplateGraphqlAll']}`,
    },
  }

  return obj
}
