import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { DICTIONARY } from '../../Constants/dictionary.const'

const { getState } = store

export const DEV_STAGE: ActionEventType = (event, data) => {
  const {
    globalVars: { language },
  } = getState()
  const message = DICTIONARY.weAreWorkingOnThis[language]
  alert(message)
}
