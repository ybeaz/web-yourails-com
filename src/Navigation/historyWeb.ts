import { Platform } from 'react-native'
import { createBrowserHistory } from 'history'

let history: any = {}
if (
  Platform.OS === 'web' ||
  Platform.OS === 'windows' ||
  Platform.OS === 'macos'
) {
  history = createBrowserHistory()
}

export const historyWeb = history
