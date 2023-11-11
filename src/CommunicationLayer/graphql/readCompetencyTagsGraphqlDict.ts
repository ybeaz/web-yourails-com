import { gql, DocumentNode } from '@apollo/client'
import { print } from 'graphql'

export type ReadCompetencyTagsGraphqlDictType = {
  operationName: string
  documentNode: DocumentNode
  documentNodePrinted: string
}

const operationName: string = 'ReadCompetencyTags'

const documentNode: DocumentNode = gql`
  query ReadCompetencyTags($params: CompetencyTagsParamsReadType!) {
    readCompetencyTags(params: $params) {
      idCompetency
      idProfile
      title
      contentType
      section
      linkHref
      iconLibrary
      iconName
      tooltips
    }
  }
`

const documentNodePrinted: string = print(documentNode)

export const readCompetencyTagsGraphqlDict: ReadCompetencyTagsGraphqlDictType =
  {
    operationName,
    documentNode,
    documentNodePrinted,
  }
