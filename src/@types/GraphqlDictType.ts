import { DocumentNode } from '@apollo/client'

export type GraphqlDictType = {
  operationName: string
  documentNode: DocumentNode
}
