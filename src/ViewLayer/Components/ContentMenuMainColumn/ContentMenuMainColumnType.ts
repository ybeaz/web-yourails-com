import { RootStoreType } from '../../../@types/RootStoreType'

export interface ContentMenuMainColumnPropsType {
  styleProps?: any
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
