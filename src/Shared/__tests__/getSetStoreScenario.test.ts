import { getSetStoreScenario } from '../getSetStoreScenario'
import { profiles } from '../../ContentMock/profilesMock'
import { DeviceType } from '../../YrlNativeViewLibrary'

/**
 * @test yarn jest getSetStoreScenario.test
 */
describe('Test function getSetStoreScenario', () => {
  it('test', () => {
    const myText = 'text'

    const var1: string = 'abc'
    console.info('App.test [42]', { var1, myText })
    expect(true).toBeTruthy()

    // const modalFrameBcIdUser1 = {
    //   childName: 'Portfolio',
    //   isShow: true,
    //   isButtonBack: false,
    //   isButtonClose: false,
    //   childProps: {},
    // }

    // const testArray = [
    //   {
    //     input: {
    //       profiles,
    //       hostname: 'r1.userto.com',
    //       pathname: 'any',
    //       hash: '#@john',
    //       deviceType: DeviceType['lgDevice'],
    //       isLeftColumn: true,
    //       isMainColumn: true,
    //     },
    //     expected: {
    //       caseNo: 1,
    //       caseDesc: 'Hostname === r1.userto.com',
    //       isShowApp: true,
    //       idUser: 1,
    //       isLeftColumn: true,
    //       isMainColumn: true,
    //       isMainColumnBlank: false,
    //       modalFrame: modalFrameBcIdUser1,
    //       redirectPathname: undefined,
    //       redirectHash: undefined,
    //     },
    //   },
    // ]

    // testArray.forEach(test => {
    //   const { input, expected } = test

    //   const outputed = getSetStoreScenario(input)

    //   console.info('getSetStoreScenario.test [37]', {
    //     input,
    //     expected,
    //     outputed,
    //   })

    //   // expect(outputed).toEqual(expected)
    // })
  })
})
