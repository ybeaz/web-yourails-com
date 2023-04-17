import { getSetStoreScenario } from '../getSetStoreScenario'

/**
 * @test yarn jest getSetStoreScenario.test
 */
describe('Test function getSetStoreScenario', () => {
  it('test', () => {
    // STOPPED HERE
    const testArray = [
      {
        input: {
          caseNo,
          isShowAppNext,
          idUserNext,
          isLeftColumnNext,
          isMainColumnNext,
          isMainColumnBlankNext,
          modalFrameNext,
        },
        expected: {
          caseNo,
          isShowAppNext,
          idUserNext,
          isLeftColumnNext,
          isMainColumnNext,
          isMainColumnBlankNext,
          modalFrameNext,
        },
      },
    ]

    testArray.forEach((test: any) => {
      const { input, expected } = test

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
