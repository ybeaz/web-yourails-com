import {
  SectionsMappingType,
  SectionsMappingProfilesType,
} from '../@types/SectionsMappingType'

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

export const sectionsMappingProfiles: SectionsMappingProfilesType = {
  '@rome': sectionsMappingDefault,
  '@smid': {
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
