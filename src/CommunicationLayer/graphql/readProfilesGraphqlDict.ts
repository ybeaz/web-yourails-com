import { gql, DocumentNode } from '@apollo/client'

import { GraphqlDictType } from '../../@types/GraphqlDictType'

const operationName: string = 'ReadProfiles'

const documentNode: DocumentNode = gql`
  query ReadProfiles {
    readProfiles {
      idProfile
      idUser
      profileName
      isActive
      profileNature
      nameFirst
      nameLast
      position
      avatarSrc
      avatarSize {
        width
        height
      }
      phones
      emails
      messengers {
        name
        profileName
      }
      locations
      serviceSpecs
      summary
      imagePendingSrc
      pendingText
      help
      promptExamples
      disclaimer
    }
  }
`

export const readProfilesGraphqlDict: GraphqlDictType = {
  operationName,
  documentNode,
}
