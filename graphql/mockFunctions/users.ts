import usersMock from '../mockJson/users.json'

type User = {
  avatar?: string
  dateCreatedAt: number
  dateDeletedAt?: number
  dateLastActiveAt: number
  dateUpdatedAt?: number
  id: string
  name: string
  role: string
  status: string
}

interface Users {
  (_: unknown, options: { limit: number }): User[]
}

export const users: Users = (_, options) => {
  const { limit } = options
  console.info('users [20]', { limit })
  return usersMock.filter((item, index) => {
    return index <= limit ? true : false
  }) as User[]
}
