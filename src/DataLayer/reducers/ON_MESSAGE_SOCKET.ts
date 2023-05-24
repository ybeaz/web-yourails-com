import { ReducerType } from '../../@types/ReducerType'

export const ON_MESSAGE_SOCKET: ReducerType = (store, data) => {
  const { messages } = store
  const { message } = data
  const messagesNext = [...messages, message]

  return { ...store, messages: messagesNext }
}
