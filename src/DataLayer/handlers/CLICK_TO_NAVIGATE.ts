import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'

const { getState } = store

export const CLICK_TO_NAVIGATE: ActionEventType = (_, data) => {
  const { screen } = data
  const {
    globalVars: { navigation },
  } = getState()
  navigation.navigate(screen)
}
