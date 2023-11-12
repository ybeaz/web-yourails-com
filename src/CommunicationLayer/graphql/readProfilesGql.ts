import { gql, DocumentNode } from '@apollo/client'

export const readProfilesGql: DocumentNode = gql`
  query readProfiles {
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
