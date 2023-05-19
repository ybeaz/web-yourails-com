import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getPathNameForReplace } from '../../Shared/getPathNameForReplace'
import { getRedirected } from '../../Shared/getRedirected'
import { io } from 'socket.io-client'

const { dispatch } = store
const socket = io('http://localhost:3003')
// 'http://localhost:3003', {
// extraHeaders: {
//   'Access-Control-Allow-Origin': 'http://localhost:19006',
// },
// }

socket.on('conversations', socket => {
  const { users } = socket
  console.info('CLICK_ON_USER_CHAT_CARD [16]', { users, socket })
})

export const CLICK_ON_USER_CHAT_CARD: ActionEventType = (event, data) => {
  const { idProfile, profileName, urlParam1, urlParam2, query } = data

  /** @description Join chatroom */
  socket.emit('joinConversation', {
    profileName: '@rome',
    respondentname: profileName, // '@smid',
  })

  console.info('CLICK_ON_USER_CHAT_CARD [26]', {
    profileName: '@rome',
    respondentname: profileName,
  })

  dispatch(
    actionSync.SET_ID_PROFILE_ACTIVE({
      idProfileActive: idProfile,
    })
  )

  const getPathNameForReplaceProps = {
    urlParam1,
    urlParam2,
    profileName,
    query,
  }

  const pathnameNext = getPathNameForReplace(getPathNameForReplaceProps)

  getRedirected(pathnameNext, { replace: true })
}
