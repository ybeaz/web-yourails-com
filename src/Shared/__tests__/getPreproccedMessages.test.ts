import { getPreproccedMessages } from '../getPreproccedMessages'
import { messages, messagesPreprocceced } from './dataMock/messagesMock'

/**
 * @test yarn jest getPreproccedMessages.test
 */
describe('Test function getPreproccedMessages', () => {
  it('test', () => {
    const idUserHost = '0'
    const outputed = getPreproccedMessages(messages, idUserHost)
    const expected = messagesPreprocceced

    expect(outputed).toEqual(expected)
  })
})
