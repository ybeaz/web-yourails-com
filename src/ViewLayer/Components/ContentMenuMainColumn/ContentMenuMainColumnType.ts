import { RootStoreType } from '../../../@types/RootStoreType'
import { SectionsMappingType } from '../../../@types/SectionsMappingType'

export interface ContentMenuMainColumnPropsType {
  styleProps?: {
    ContentMenuMainColumn: any
    buttonWrapper: any
  }
  sectionsMapping: SectionsMappingType
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
