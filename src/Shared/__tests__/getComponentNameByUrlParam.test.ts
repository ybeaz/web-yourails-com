import { getComponentNameByUrlParam } from '../getComponentNameByUrlParam'
import { SectionType } from '../../@types/SectionType'

/**
 * @test yarn jest getComponentNameByUrlParam.test
 */
describe('Test function getComponentNameByUrlParam', () => {
  it('test', () => {
    const sectionsMappingForProfile = [
      {
        profileName: '@smid',
        contentType: SectionType['ProjectType'],
        title: 'Work Examples',
        pathname: 'work-examples',
        iconLibrary: 'Ionicons',
        iconName: 'briefcase-outline',
        iconTitleText: 'Works',
        childName: 'Portfolio',
      },
      {
        profileName: '@smid',
        contentType: SectionType['CompetencyTagType'],
        title: 'Competency Tags',
        pathname: 'skills',
        iconLibrary: 'Ionicons',
        iconName: 'cog-outline',
        iconTitleText: 'Skills',
        childName: 'CompetencyTags',
      },
      {
        profileName: '@smid',
        contentType: SectionType['ProfileType'],
        title: '',
        pathname: 'profile',
        iconLibrary: 'Ionicons',
        iconName: 'person-outline',
        iconTitleText: 'Profile',
        childName: 'Profile',
      },
    ]

    const tests = [
      {
        input: {
          sectionsMappingForProfile,
          urlParam: 'unreal',
        },
        expected: '',
      },
      {
        input: {
          sectionsMappingForProfile,
          urlParam: 'work-examples',
        },
        expected: 'Portfolio',
      },
    ]

    tests.forEach(test => {
      const { input, expected } = test

      const outputed = getComponentNameByUrlParam(input)

      expect(outputed).toEqual(expected)
    })
  })
})
