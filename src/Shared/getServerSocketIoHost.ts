interface GetServerSocketIoHostType {
  (): string
}

/**
 * @description Function to
 * @import import { getServerSocketIoHost } from '../../../Shared/getServerSocketIoHost'
 */

export const getServerSocketIoHost: GetServerSocketIoHostType = () => {
  let output = 'https://yourails.com'

  if (location.host === 'localhost:19006') output = 'http://localhost:3000'

  return output
}
