import { SERVERS } from '../Constants/servers.const'
import { IHeaders, IConnector } from '../Interfaces/IConnector'

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const templateConnector: IConnector = () => {
  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'SendTemplate',
      variables: {},
      query: `query SendTemplate(){sendTemplate(){} }} fragment ${`...`}`,
    },
    options: { headers: { ...headers } },
    url: `.../graphql`,
  }

  return obj
}
