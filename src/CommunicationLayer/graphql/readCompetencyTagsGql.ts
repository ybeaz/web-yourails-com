import { gql, DocumentNode } from '@apollo/client'

export const readCompetencyTagsGql: DocumentNode = gql`
  query readCompetencyTags($params: CompetencyTagsParamsReadType!) {
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
