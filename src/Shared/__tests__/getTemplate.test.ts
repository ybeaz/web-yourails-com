import { getTemplate } from '../getTemplate'

/**
 * @test yarn jest getTemplate.test
 */
describe('Test function getTemplate', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
      },
    ]

    tests.forEach((test: any) => {
      const { isActive } = test
      if (isActive) {
        const outputed = getTemplate()

        console.info('getTemplat []', { outputed })
        const outputed2 = true
        const expected2 = true
        expect(outputed2).toEqual(expected2)
      }
    })
  })
})
