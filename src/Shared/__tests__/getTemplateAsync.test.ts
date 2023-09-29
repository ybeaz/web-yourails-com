import { getTemplateAsync } from '../getTemplateAsync'

const consoleDirOptions = {
  showHidden: true,
  depth: null,
  showPrototypes: true,
}

/**
 * @test yarn jest getTemplateAsync.test
 */
describe('Test function getTemplateAsync', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        params: {},
        expected: {},
      },
    ]

    tests.forEach(async (test: any) => {
      const { isActive, params, expected } = test
      if (isActive) {
        const outputed = await getTemplateAsync(params)

        console.info('getTemplateAsync [27]', { outputed })

        // expect(outputed).toEqual(expected)
      }
    })
  })
})
