import { getSetStoreScenario, modalFrameFalse } from '../getSetStoreScenario'
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
        isActive: false,
        input: {
          profiles,
          hostname: 'r1.userto.com',
          pathname: 'any',
          hash: '#@john',
          deviceType: DeviceType['lgDevice'],
          isLeftColumn: true,
          isMainColumn: true,
        },
        expected: {
          caseNo: 1,
          caseDesc: 'Hostname === r1.userto.com',
          isShowApp: true,
          idUser: 1,
          isLeftColumn: false,
          isMainColumn: true,
          isMainColumnBlank: false,
          modalFrame: modalFrameBcIdUser1,
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
          hash: '#@unknown',
          deviceType: DeviceType['lgDevice'],
          isLeftColumn: true || false,
          isMainColumn: true || false,
        },
        expected: {
          caseNo: 2,
          caseDesc:
            'User direct link but without valid profileName and consequently unfound idUserUrl',
          isShowApp: false,
          idUser: undefined,
          isLeftColumn: false,
          isMainColumn: true,
          isMainColumnBlank: true,
          modalFrame: modalFrameFalse,
          redirectPathname: `/k`,
          redirectHash: '',
        },
      },
    ]

    testArray.forEach(test => {
      const { isActive, input, expected } = test
      if (!isActive) return

      const outputed = getSetStoreScenario(input)

      console.info('getSetStoreScenario.test [37]', {
        input,
        expected,
        outputed,
      })

      expect(outputed).toEqual(expected)
    })
  })
})
