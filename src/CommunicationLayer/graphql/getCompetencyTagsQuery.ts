import { gql, DocumentNode } from '@apollo/client'
import { print } from 'graphql'

export const getCompetencyTagsDocument: DocumentNode = gql`
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

/**
 * @import import { getCompetencyTagsQuery } from './graphql/getCompetencyTagsQuery'
 */
export const getCompetencyTagsQuery = print(getCompetencyTagsDocument)
