import { ReducerType } from '../../@types/ReducerType'

export const ADD_MESSAGE: ReducerType = (store, data) => {
  const { messages } = store
  const { message } = data
  const messagesNext = [...messages, message]

  return { ...store, messages: messagesNext }
}
