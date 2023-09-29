export interface RouteType {
  path: string
  strict?: boolean
  exact?: boolean
  page: string
  isHashRouter?: boolean
  themeDafault: string
}

export const routes: RouteType[] = [
  {
    path: `/k`,
    exact: true,
    page: 'PageChatsWholeScreen',
    isHashRouter: true,
    themeDafault: 'Light',
  },
  {
    path: `/`,
    exact: true,
    page: 'PageChatsWholeScreen',
    isHashRouter: true,
    themeDafault: 'Light',
  },
  // {
  //   path: `/TemplateScreen`,
  //   exact: true,
  //   page: 'TemplateScreen',
  //   themeDafault: 'Light',
  // },
  // {
  //   path: `/stub`,
  //   exact: true,
  //   page: 'StubInProgress',
  //   themeDafault: 'Light',
  // },
  // {
  //   path: `/error`,
  //   exact: true,
  //   page: 'Error404',
  //   themeDafault: 'Dark',
  // },
]
