import { gql, DocumentNode } from '@apollo/client'

import { GraphqlDictType } from '../../@types/GraphqlDictType'

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

export const readCompetencyTagsGraphqlDict: GraphqlDictType = {
  operationName,
  documentNode,
}
