export type MessengerType = {
  name: string
  username: string | number
}

/**
 * @import import { ProfileType, MessengerType } from '../@types/ProfileType'
 */
export interface ProfileType {
  id: string | number
  nameFirst?: string
  nameLast?: string
  uriAvatar?: string
  username?: string | number
  phones?: (string | number | undefined)[]
  emails?: string[]
  messengers?: MessengerType[]
  serviceSpecs?: string[]
  locations?: string[]
  contacts?: string[]
  serviceSections?: []
  summary: string
}
