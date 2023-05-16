import { RootStoreType } from '../../../@types/RootStoreType'
import { SectionMappingType } from '../../../@types/SectionMappingType'

import { UrlParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface ContentMenuMainColumnPropsType {
  styleProps?: {
    ContentMenuMainColumn: any
    buttonWrapper: any
  }
  urlParams?: UrlParamsDefaultType
  sectionsMapping: SectionMappingType[]
  store: RootStoreType
  handleEvents: any
}

/**
 * @import import { ContentMenuMainColumnType } from './ContentMenuMainColumnType'
 */
export interface ContentMenuMainColumnType
  extends React.FunctionComponent<ContentMenuMainColumnPropsType> {
  (props: ContentMenuMainColumnPropsType): React.ReactElement
}
