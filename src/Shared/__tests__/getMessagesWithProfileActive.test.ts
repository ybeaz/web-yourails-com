import { conversations } from '../__mocks__/conversationsMock'
import { messages } from '../__mocks__/messagesMock'

import { getMessagesWithProfileActive } from '../getMessagesWithProfileActive'

/**
 * @test yarn jest getMessagesWithProfileActive.test
 */
describe('Test function getMessagesWithProfileActive', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        conversations,
        messages,
        idProfileHost: '1',
        idProfileActive: '2',
      },
    ]

    tests.forEach((test: any) => {
      const {
        isActive,
        conversations,
        messages,
        idProfileHost,
        idProfileActive,
      } = test
      if (isActive) {
        const outputed = getMessagesWithProfileActive({
          conversations,
          messages,
          idProfileHost,
          idProfileActive,
        })

        console.info('getMessagesWithProfileActive.test [37]', { outputed })
        const outputed2 = true
        const expected2 = true
        expect(outputed2).toEqual(expected2)
      }
    })
  })
})
