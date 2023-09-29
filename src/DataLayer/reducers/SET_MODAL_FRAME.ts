import { RootStoreType } from '../../@types/RootStoreType'
import { ReducerType } from '../../@types/ReducerType'

export const SET_MODAL_FRAME: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const { modalFrame } = componentsState

  let dataNext = data
  if (data.childName === 'Chat') {
    dataNext = { ...modalFrame, isShow: false }
  }

  const componentsStateNext = {
    ...componentsState,
    modalFrame: { ...modalFrame, ...dataNext },
  }

  return { ...store, componentsState: componentsStateNext }
}
