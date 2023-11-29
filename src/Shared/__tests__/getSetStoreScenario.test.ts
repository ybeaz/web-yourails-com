import {
  getSetStoreScenario,
  modalFrameFalse,
  modalFrameTrue,
} from '../getSetStoreScenario'
import { profiles } from '../../ContentMock/profilesMock'
// import { DeviceType } from '../../YrlNativeViewLibrary'

export enum DeviceType {
  xsDevice = 'xsDevice',
  smDevice = 'smDevice',
  mdDevice = 'mdDevice',
  lgDevice = 'lgDevice',
  xlDevice = 'xlDevice',
}

/**
 * @description TODO: to test it
 * @test yarn jest getSetStoreScenario.test
 */
describe('Test function getSetStoreScenario', () => {
  it('test', () => {
    // const myText = 'text'
    // const var1: string = 'abc'
    // console.info('App.test [42]', { var1, myText })
    // expect(true).toBeTruthy()

    const modalFrameBcIdUser1 = {
      childName: 'Portfolio',
      isShow: true,
      isButtonBack: false,
      isButtonClose: false,
      childProps: {},
    }

    const testArray = [
      {
        isActive: true,
        input: {
          profiles,
          hostname: 'r1.userto.com',
          pathname: 'any',
          // urlParam1,
          // urlParam2,
          // urlParam3,
          // query,
          deviceType: DeviceType['lgDevice'],
        },
        expected: {
          caseNo: 1,
          caseDesc: 'Hostname === r1.userto.com',
          isShowApp: true,
          userID: 1,
          isLeftColumn: false,
          isMainColumn: true,
          isMainColumnBlank: false,
          modalFrame: modalFrameBcIdUser1,
          redirectPathname: undefined,
          redirectHash: undefined,
        },
      },
    ]

    const testArray2 = [
      {
        isActive: true,
        input: {
          profiles,
          hostname: 'any',
          pathname: '/',
          hash: '#@unknown',
          deviceType: DeviceType['lgDevice'],
          isLeftColumn: true || false,
          isMainColumn: true || false,
        },
        expected: {
          caseNo: 2,
          caseDesc:
            'User direct link but without valid profileName and consequently unfound idUserUrl',
          isShowApp: true,
          userID: undefined,
          isLeftColumn: false,
          isMainColumn: true,
          isMainColumnBlank: true,
          modalFrame: modalFrameFalse,
          redirectPathname: `/k`,
          redirectHash: '',
        },
      },
      {
        isActive: true,
        input: {
          profiles,
          hostname: 'any',
          pathname: '/',
          hash: '#@rome?s=bc',
          deviceType: DeviceType['lgDevice'],
          isLeftColumn: true || false,
          isMainColumn: true || false,
        },
        expected: {
          caseNo: 3,
          caseDesc:
            'User direct link without chat and Business Card only and without left column',
          isShowApp: true,
          userID: '1',
          isLeftColumn: false,
          isMainColumn: true,
          isMainColumnBlank: false,
          modalFrame: modalFrameTrue,
          redirectPathname: undefined,
          redirectHash: undefined,
        },
      },
      {
        isActive: true,
        input: {
          profiles,
          hostname: 'any',
          pathname: '/',
          hash: '#@rome',
          deviceType: DeviceType['lgDevice'],
          isLeftColumn: true || false,
          isMainColumn: true || false,
        },
        expected: {
          caseNo: 4,
          caseDesc: 'User direct link with chat and without left column',
          isShowApp: true,
          userID: '1',
          isLeftColumn: false,
          isMainColumn: true,
          isMainColumnBlank: false,
          modalFrame: modalFrameFalse,
          redirectPathname: undefined,
          redirectHash: undefined,
        },
      },
      {
        isActive: true,
        input: {
          profiles,
          hostname: 'any',
          pathname: '/k',
          hash: '#@unknown',
          deviceType: DeviceType['lgDevice'],
          isLeftColumn: true || false,
          isMainColumn: true || false,
        },
        expected: {
          caseNo: 5,
          caseDesc:
            'The Chat service Yourails.com without valid user without selected user with the left column',
          isShowApp: true,
          userID: undefined,
          isLeftColumn: true,
          isMainColumn: true,
          isMainColumnBlank: true,
          modalFrame: modalFrameFalse,
          redirectPathname: undefined,
          redirectHash: undefined,
        },
      },
      {
        isActive: true,
        input: {
          profiles,
          hostname: 'any',
          pathname: '/k',
          hash: '#@rome',
          deviceType: DeviceType['lgDevice'],
          isLeftColumn: true || false,
          isMainColumn: true || false,
        },
        expected: {
          caseNo: 6,
          caseDesc:
            'The Chat service Yourails.com with selected user with the left column',
          isShowApp: true,
          userID: '1',
          isLeftColumn: true,
          isMainColumn: true,
          isMainColumnBlank: false,
          modalFrame: modalFrameFalse,
          redirectPathname: undefined,
          redirectHash: undefined,
        },
      },
    ]

    testArray.forEach(test => {
      const { isActive, input, expected } = test
      if (!isActive) return

      const outputed = getSetStoreScenario(input)

      // console.info('getSetStoreScenario.test [37]', {
      //   input,
      //   expected,
      //   outputed,
      // })

      expect(outputed).toEqual(expected)
    })
  })
})
