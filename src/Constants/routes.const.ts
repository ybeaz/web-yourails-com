interface IRoute {
  path: string
  strict?: boolean
  exact?: boolean
  page: string
  themeDafault: string
}

export const routes: IRoute[] = [
  {
    path: `/TemplateScreen`,
    exact: true,
    page: 'TemplateScreen',
    themeDafault: 'Light',
  },
  // {
  //   path: `/stub-in-progress`,
  //   exact: true,
  //   page: 'StubInProgress',
  //   themeDafault: 'Light',
  // },
  {
    path: `/error-404`,
    exact: true,
    page: 'Error404',
    themeDafault: 'Dark',
  },
  {
    path: `/`,
    exact: true,
    page: 'TemplateScreen',
    themeDafault: 'Light',
  },
]
