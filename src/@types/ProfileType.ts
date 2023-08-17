import { IdUserType } from '../@types/UserType'

export type MessengerType = {
  name: string
  profileName: string | number
}

/**
 * @import import { ProfileType, MessengerType } from '../@types/ProfileType'
 */
export type ProfileType = {
  idProfile: string
  idSocket?: string
  idUser: IdUserType
  avatarSize?: { width: number; height: number }
  avatarSrc?: string
  contacts?: string[]
  disclaimer?: string
  emails?: string[]
  imagePendingSrc?: string
  isActive: boolean
  locations?: string[]
  messengers?: MessengerType[]
  nameFirst?: string
  nameLast?: string
  pendingText?: string
  phones?: (string | number | undefined)[]
  position: number
  profileName?: string
  promptExamples?: string[]
  serviceSections?: []
  serviceSpecs?: string[]
  summary?: string
}
