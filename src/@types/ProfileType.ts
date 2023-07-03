import { IdUserType } from '../@types/UserType'

export type MessengerType = {
  name: string
  profileName: string | number
}

/**
 * @import import { ProfileType, MessengerType } from '../@types/ProfileType'
 */
export type ProfileType = {
  idSocket?: string
  idProfile: string
  idUser?: IdUserType
  position: number
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
  avatarSrc?: string
  avatarSize?: { width: number; height: number }
  imagePendingSrc?: string
  pendingText?: string
  disclaimer?: string
}
