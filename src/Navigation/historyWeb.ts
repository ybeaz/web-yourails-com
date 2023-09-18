import { Platform } from 'react-native'
import { createBrowserHistory } from 'history'

let history: any = {}
if (Platform.OS === 'web') {
  history = createBrowserHistory()
}

export const historyWeb = history
