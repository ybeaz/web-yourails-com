import { getScenarioParamsFromUrlParams } from '../getScenarioParamsFromUrlParams'

/**
 * @test yarn jest getScenarioParamsFromUrlParams.test
 */
describe('Test function getScenarioParamsFromUrlParams', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        input: {
          urlParam1: '@smid',
          urlParam2: 'portfolio',
          query: { s: 'bc' },
        },
        expected: {
          caseNo: 6.7,
          profileName: '@smid',
          isLeftColumn: false,
          isMainColumnBlank: false,
          isShowModalFrame: true,
          modalFrameParamName: 'portfolio',
          isButtonBack: false,
          isButtonClose: false,
          redirectPathname: undefined,
        },
      },
      {
        isActive: true,
        input: { urlParam1: '@smid', urlParam2: 'portfolio' },
        expected: {
          caseNo: 6.5,
          profileName: '@smid',
          isLeftColumn: false,
          isMainColumnBlank: false,
          isShowModalFrame: true,
          modalFrameParamName: 'portfolio',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: undefined,
        },
      },
      {
        isActive: true,
        input: { urlParam1: '@smid' },
        expected: {
          caseNo: 6,
          profileName: '@smid',
          isLeftColumn: false,
          isMainColumnBlank: false,
          isShowModalFrame: false,
          modalFrameParamName: '',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: undefined,
        },
      },
      {
        isActive: true,
        input: { urlParam1: 'k', urlParam2: '@smid', urlParam3: 'profile' },
        expected: {
          caseNo: 5.5,
          profileName: '@smid',
          isLeftColumn: true,
          isMainColumnBlank: false,
          isShowModalFrame: true,
          modalFrameParamName: 'profile',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: undefined,
        },
      },
      {
        isActive: true,
        input: { urlParam1: 'k', urlParam2: '@smid' },
        expected: {
          caseNo: 5,
          profileName: '@smid',
          isLeftColumn: true,
          isMainColumnBlank: false,
          isShowModalFrame: false,
          modalFrameParamName: '',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: undefined,
        },
      },
      {
        isActive: true,
        input: { urlParam1: 'k', urlParam2: 'something' },
        expected: {
          caseNo: 4,
          profileName: undefined,
          isLeftColumn: true,
          isMainColumnBlank: true,
          isShowModalFrame: false,
          modalFrameParamName: '',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: '/k',
        },
      },
      {
        isActive: true,
        input: { urlParam1: 'k' },
        expected: {
          caseNo: 3,
          profileName: undefined,
          isLeftColumn: true,
          isMainColumnBlank: true,
          isShowModalFrame: false,
          modalFrameParamName: '',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: undefined,
        },
      },
      {
        isActive: true,
        input: { urlParam1: 'something' },
        expected: {
          caseNo: 2,
          profileName: undefined,
          isLeftColumn: true,
          isMainColumnBlank: true,
          isShowModalFrame: false,
          modalFrameParamName: '',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: '/k',
        },
      },
      {
        isActive: true,
        input: {},
        expected: {
          caseNo: 1,
          profileName: undefined,
          isLeftColumn: true,
          isMainColumnBlank: true,
          isShowModalFrame: false,
          modalFrameParamName: '',
          isButtonBack: true,
          isButtonClose: true,
          redirectPathname: `/k`,
        },
      },
    ]

    tests.forEach(test => {
      const { isActive, input, expected } = test

      if (isActive) {
        const outputed = getScenarioParamsFromUrlParams(input)

        // console.info('getScenarioParamsFromUrlParams.test [15]', {
        //   expected,
        //   input,
        //   outputed,
        // })

        const outputed2 = true
        const expected2 = true
        expect(outputed).toEqual(expected)
      }
    })
  })
})
