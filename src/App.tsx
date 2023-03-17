import { Provider} from 'react-redux'
import { store} from './DataLayer/store'
import { PageChatsWholeScreen } from './ViewLayer/Screens/PageChatsWholeScreen/PageChatsWholeScreen'

export default function App() {
  return (
    <Provider store={store}>
      <PageChatsWholeScreen />
    </Provider>
  )
}