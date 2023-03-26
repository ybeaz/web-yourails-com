import { componentsStateDefault } from '../rootStoreDefault'
import { getUniqArrDeep } from '../../Shared/getUniqArrDeep'
import { getUpdatedArrByArrInput } from '../../Shared/getUpdatedArrByArrInput'
import { RootStoreType } from '../../@types/RootStoreType'

export const SET_MODAL_FRAME: Function = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const { modalFrames } = componentsState

  let modaleFramesNext = modalFrames.map(item => ({ ...item, isActive: false }))

  if (data.length > 0) {
    modaleFramesNext = getUniqArrDeep(modalFrames)
    modaleFramesNext = getUpdatedArrByArrInput(
      modaleFramesNext,
      data,
      'childName'
    )
  } else {
    modaleFramesNext = componentsStateDefault.modalFrames
  }

  const componentsStateNext = {
    ...componentsState,
    modalFrames: modaleFramesNext,
  }
  return { ...store, componentsState: componentsStateNext }
}
