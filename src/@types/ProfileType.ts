import { IdUserType } from '../@types/UserType'

export type MessengerType = {
  name: string
  profileName: string | number
}

/**
 * @import import { ProfileType, MessengerType } from '../@types/ProfileType'
 */
export interface ProfileType {
  idSocket?: string
  idProfile: string
  idUser?: IdUserType
  contacts?: string[]
  emails?: string[]
  locations?: string[]
  messengers?: MessengerType[]
  nameFirst?: string
  nameLast?: string
  phones?: (string | number | undefined)[]
  profileName?: string
  serviceSections?: []
  serviceSpecs?: string[]
  summary?: string
  uriAvatar?: string
  pendingImage?: string
  pendingText?: string
  disclaimer?: string
}
