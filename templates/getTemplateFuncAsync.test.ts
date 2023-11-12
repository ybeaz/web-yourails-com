import { consoler } from './consoler'
import { getTemplateFuncAsync } from './getTemplateFuncAsync'

const consoleDirOptions = {
  showHidden: true,
  depth: null,
  showPrototypes: true,
}

/**
 * @test yarn jest getTemplateFuncAsync.test
 */
describe('Test function getTemplateFuncAsync', () => {
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
        const outputed = await getTemplateFuncAsync(params)

        consoler('getTemplateFuncAsync [27]', 'output', outputed)

        // expect(outputed).toEqual(expected)
      }
    })
  })
})
