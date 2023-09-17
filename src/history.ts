import { Platform } from 'react-native'
import { createBrowserHistory } from 'history'

let historyM1 = {}
if (Platform.OS === 'web') {
  historyM1 = createBrowserHistory()
}

export const history = historyM1
