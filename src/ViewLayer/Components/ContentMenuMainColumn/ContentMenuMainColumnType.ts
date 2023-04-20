import { RootStoreType } from '../../../@types/RootStoreType'

export interface ContentMenuMainColumnPropsType {
  styleProps?: {
    ContentMenuMainColumn: any
    buttonWrapper: any
  }
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
