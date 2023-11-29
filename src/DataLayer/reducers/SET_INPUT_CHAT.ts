import { ReducerType } from '../../@types/ReducerType'

export const SET_INPUT_CHAT: ReducerType = (store, data) => {
  const { profileActiveID, text } = data

  const { forms } = store
  const { inputChat } = forms

  const inputChatNext = { ...inputChat, [profileActiveID]: text }
  const formsNext = { ...forms, inputChat: inputChatNext }

  return { ...store, forms: formsNext }
}
