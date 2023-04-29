type SectionMapType = {
  title: string
  pathname: string
  iconLibrary: string
  iconName: string
  iconTitleText: string
  childName: string
}

type SectionsMappingType = Record<string, SectionMapType>

export const sectionsMappingDefault: SectionsMappingType = {
  ProjectType: {
    title: 'Projects And Work Examples',
    pathname: 'projects',
    iconLibrary: 'Ionicons',
    iconName: 'briefcase-outline',
    iconTitleText: 'Portfolio',
    childName: 'Portfolio',
  },
  CompetencyTagType: {
    title: 'Competency Tags',
    pathname: 'skills',
    iconLibrary: 'Ionicons',
    iconName: 'cog-outline',
    iconTitleText: 'Skills',
    childName: 'CompetencyTags',
  },
  ProfileType: {
    title: '',
    pathname: 'profile',
    iconLibrary: 'Ionicons',
    iconName: 'person-outline',
    iconTitleText: 'Profile',
    childName: 'Profile',
  },
}

export const sectionsMappingUsers: Record<string, SectionsMappingType> = {
  '1': sectionsMappingDefault,
  '2': {
    ...sectionsMappingDefault,
    ProjectType: {
      title: 'Work Examples',
      pathname: 'work-examples',
      iconLibrary: 'Ionicons',
      iconName: 'briefcase-outline',
      iconTitleText: 'Works',
      childName: 'Portfolio',
    },
  },
}
