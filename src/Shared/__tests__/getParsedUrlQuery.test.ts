import { getParsedUrlQuery } from '../getParsedUrlQuery'

/**
 * @test yarn jest getParsedUrlQuery.test
 */
describe('Test function getParsedUrlQuery', () => {
  it('test', () => {
    type TestArray = {
      input: string
      expected: { profileName: string; [key: string]: string } | {}
    }

    const testArray: TestArray[] = [
      {
        input: '#@smid?bc=true',
        expected: { profileName: '@smid', bc: 'true' },
      },
      {
        input: '#@smid',
        expected: { profileName: '@smid' },
      },
      {
        input: '#@smid?bc=true&th=123',
        expected: { profileName: '@smid', bc: 'true', th: '123' },
      },
      {
        input: '#',
        expected: {},
      },
      {
        input: '#@',
        expected: { profileName: '@' },
      },
    ]

    testArray.forEach((test: TestArray) => {
      const { input, expected } = test
      const outputed = getParsedUrlQuery(input)
      console.info('getParsedUrlQuery.test [23]', { input, outputed })
      expect(outputed).toEqual(expected)
    })
  })
})
