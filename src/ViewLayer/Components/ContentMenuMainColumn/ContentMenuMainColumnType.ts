import { RootStoreType } from '../../../@types/RootStoreType'
import { SectionMappingType } from '../../../@types/SectionMappingType'

export type ContentMenuMainColumnPropsType = {
  styleProps?: {
    ContentMenuMainColumn: any
    buttonWrapper: any
  }
  sectionsMapping: SectionMappingType[]
  store: RootStoreType
  handleEvents: any
}

export type ContentMenuMainColumnPropsOutType = Record<string, any>

/**
 * @import import { ContentMenuMainColumnType } from './ContentMenuMainColumnType'
 */
export interface ContentMenuMainColumnType
  extends React.FunctionComponent<ContentMenuMainColumnPropsType> {
  (props: ContentMenuMainColumnPropsType): React.ReactElement
}
