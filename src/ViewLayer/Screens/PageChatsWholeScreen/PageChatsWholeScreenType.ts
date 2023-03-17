/**
 * ITemplateYrlProps Interface
 */
export interface PageChatsWholeScreenPropsType {
  // routeProps: {
  //   location: {
  //     pathname: string
  //   }
  // }
  // themeDafault: string
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}