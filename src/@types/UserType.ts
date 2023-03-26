/**
 * @import import { UserType } from '../@types/UserType'
 */
export interface UserType {
  id: string | number
  nameFirst?: string
  nameLast?: string
  uriAvatar?: string
  telephone?: string | number
  email?: string
  serviceSpecs?: string[]
  locations?: string[]
  contacts?: string[]
  serviceSections?: []
}
