import { idUser } from '../@types/UserType'

export type MessengerType = {
  name: string
  profilename: string | number
}

/**
 * @import import { ProfileType, MessengerType } from '../@types/ProfileType'
 */
export interface ProfileType {
  idProfile: string | number
  idUser: idUser
  nameFirst?: string
  nameLast?: string
  uriAvatar?: string
  profilename?: string | number
  phones?: (string | number | undefined)[]
  emails?: string[]
  messengers?: MessengerType[]
  serviceSpecs?: string[]
  locations?: string[]
  contacts?: string[]
  serviceSections?: []
  summary: string
}
