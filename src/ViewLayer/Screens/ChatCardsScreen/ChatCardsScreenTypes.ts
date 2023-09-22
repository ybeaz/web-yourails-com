import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface ChatCardsScreenPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  onLayout?: () => void
}

export type ChatCardsScreenPropsOutType = Record<string, any>

/* TODO
  {
  style: any
  themes: { themeA: any; themeB: any }
  layoutScreenProps: Omit<LayoutScreenPropsType, 'children'>
  layoutOfRowNavigationTopProps: LayoutOfRowPropsType
  layoutOfRowMainContentProps: LayoutOfRowPropsType
  layoutOfRowNavigationBottomProps: LayoutOfRowPropsType
  mainColumnContentMenuProps: Omit<
    ContentMenuMainColumnPropsType,
    'sectionsMapping' | 'store' | 'handleEvents'
  >
  isShowModalFrame: boolean
  isMainColumnBlank: boolean
  sectionsMappingForProfile: SectionMappingType[]
}
*/

/**
 * @import import { ChatCardsScreenType } from './ChatCardsScreenType'
 */
export interface ChatCardsScreenComponentType
  extends React.FunctionComponent<ChatCardsScreenPropsType> {
  (props: ChatCardsScreenPropsType): React.ReactElement
}

export type ChatCardsScreenType =
  React.FunctionComponent<ChatCardsScreenPropsType>
