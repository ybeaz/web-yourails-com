import { gql, DocumentNode } from '@apollo/client'

export const readCompetencyTagsGql: DocumentNode = gql`
  query readCompetencyTags($params: CompetencyTagsParamsReadType!) {
    readCompetencyTags(params: $params) {
      competencyID
      profileID
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
