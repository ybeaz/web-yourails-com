import { gql, DocumentNode } from '@apollo/client'
import { print } from 'graphql'

export const getProfilesDocument: DocumentNode = gql`
  query GetProfiles {
    getProfiles {
      idProfile
      idUser
      profileName
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
      disclaimer
    }
  }
`

/**
 * @import import { getProfilesQuery } from './graphql/getProfilesQuery'
 */
export const getProfilesQuery = print(getProfilesDocument)
