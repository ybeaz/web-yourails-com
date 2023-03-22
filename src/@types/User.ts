/**
 * @import import { User } from '../@types/User'
 */
export interface User {
  id: string | number
  nameFirst?: string
  nameLast?: string
  uriAvatar?: string
  telephone?: string | number
  email?: string
  serviceSpecs?: string[]
  locations?: string[]
}
