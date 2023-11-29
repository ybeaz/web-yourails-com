import { getFilteredLastObjectByIdProfile } from '../getFilteredLastObjectByIdProfile'

const consoleDirOptions = {
  showHidden: true,
  depth: null,
  showPrototypes: true,
}

/**
 * @test yarn jest getFilteredLastObjectByIdProfile.test
 */
describe('Test function getFilteredLastObjectByIdProfile', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        input: {
          messages: [
            { messageID: 'xxx1', profileID: 'yyy1' },
            { messageID: 'xxx2', profileID: 'yyy2' },
            { messageID: 'xxx3', profileID: 'yyy1' },
            { messageID: 'xxx3', profileID: 'yyy2' },
            { messageID: 'xxx4', profileID: 'yyy2' },
          ],
          profileID: 'yyy2',
        },
        expected: [
          { messageID: 'xxx1', profileID: 'yyy1' },
          { messageID: 'xxx2', profileID: 'yyy2' },
          { messageID: 'xxx3', profileID: 'yyy1' },
          { messageID: 'xxx3', profileID: 'yyy2' },
        ],
      },
      {
        isActive: true,
        input: {
          messages: [
            { messageID: 'xxx1', profileID: 'yyy1' },
            { messageID: 'xxx2', profileID: 'yyy2' },
            { messageID: 'xxx3', profileID: 'yyy1' },
            { messageID: 'xxx3', profileID: 'yyy2' },
            { messageID: 'xxx4', profileID: 'yyy2' },
            { messageID: 'xxx5', profileID: 'yyy1' },
          ],
          profileID: 'yyy2',
        },
        expected: [
          { messageID: 'xxx1', profileID: 'yyy1' },
          { messageID: 'xxx2', profileID: 'yyy2' },
          { messageID: 'xxx3', profileID: 'yyy1' },
          { messageID: 'xxx3', profileID: 'yyy2' },
          { messageID: 'xxx5', profileID: 'yyy1' },
        ],
      },
      {
        isActive: true,
        input: {
          messages: [
            { messageID: 'xxx1', profileID: 'yyy1' },
            { messageID: 'xxx2', profileID: 'yyy3' },
            { messageID: 'xxx3', profileID: 'yyy1' },
            { messageID: 'xxx3', profileID: 'yyy3' },
            { messageID: 'xxx4', profileID: 'yyy3' },
          ],
          profileID: 'yyy2',
        },
        expected: [
          { messageID: 'xxx1', profileID: 'yyy1' },
          { messageID: 'xxx2', profileID: 'yyy3' },
          { messageID: 'xxx3', profileID: 'yyy1' },
          { messageID: 'xxx3', profileID: 'yyy3' },
          { messageID: 'xxx4', profileID: 'yyy3' },
        ],
      },
    ]

    tests.forEach((test: any) => {
      const { isActive, input, expected } = test
      const { messages, profileID } = input

      if (isActive) {
        const outputed = getFilteredLastObjectByIdProfile(messages, profileID)

        // console.info('getFilteredLastObjectByIdProfile [21]', { outputed })

        expect(outputed).toEqual(expected)
      }
    })
  })
})
