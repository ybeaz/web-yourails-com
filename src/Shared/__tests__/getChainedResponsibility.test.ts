import { consoler } from './consoler'
import {
  getChainedResponsibility,
  ExecDictType,
} from '../getChainedResponsibility'
import { RootStoreType } from '../../@types/RootStoreType'

import { getPreproccedMessages } from '../getPreproccedMessages'
import {
  getMessagesWithProfileActive,
  GetMessagesWithProfileActiveParamsType,
} from '../getMessagesWithProfileActive'

import { messages } from '../__mocks__/messagesMock'

let expected = [
  {
    idMessage: 'random_string_1',
    idConversation: '["1","4"]',
    idProfile: '4',
    createdAt: 1646145000000,
    eventType: 'chatMessage',
    text: 'Need a web app for appointment management.',
    position: 'left',
    isTail: true,
  },
  {
    idMessage: 'random_string_2',
    idConversation: '["1","4"]',
    idProfile: '1',
    createdAt: 1646145300000,
    eventType: 'chatMessage',
    text: 'Details on how you want the app to work?',
    position: 'right',
    isTail: true,
  },
  {
    idMessage: 'random_string_3',
    idConversation: '["1","4"]',
    idProfile: '4',
    createdAt: 1646145640000,
    eventType: 'chatMessage',
    text: 'Schedule, cancel, notifications. Show past appts in calendar view.',
    position: 'left',
    isTail: true,
  },
  {
    idMessage: 'random_string_4',
    idConversation: '["1","4"]',
    idProfile: '1',
    createdAt: 1646145960000,
    eventType: 'chatMessage',
    text: 'Specific design or layout requirements?',
    position: 'right',
    isTail: true,
  },
  {
    idMessage: 'random_string_5',
    idConversation: '["1","4"]',
    idProfile: '4',
    createdAt: 1646146300000,
    eventType: 'chatMessage',
    text: 'Clean, modern, easy to use.',
    position: 'left',
    isTail: true,
  },
  {
    idMessage: 'random_string_6',
    idConversation: '["1","4"]',
    idProfile: '1',
    createdAt: 1646146620000,
    eventType: 'chatMessage',
    text: 'How many users?',
    position: 'right',
    isTail: true,
  },
  {
    idMessage: 'random_string_7',
    idConversation: '["1","4"]',
    idProfile: '4',
    createdAt: 1646146980000,
    eventType: 'chatMessage',
    text: 'Around 50.',
    position: 'left',
    isTail: true,
  },
  {
    idMessage: 'random_string_8',
    idConversation: '["1","4"]',
    idProfile: '1',
    createdAt: 1646147340000,
    eventType: 'chatMessage',
    text: 'Deadline for project?',
    position: 'right',
    isTail: true,
  },
  {
    idMessage: 'random_string_9',
    idConversation: '["1","4"]',
    idProfile: '4',
    createdAt: 1646147700000,
    eventType: 'chatMessage',
    text: '3 months.',
    position: 'left',
    isTail: true,
  },
  {
    idMessage: 'random_string_10',
    idConversation: '["1","4"]',
    idProfile: '1',
    createdAt: 1646148060000,
    eventType: 'chatMessage',
    text: 'Starting project, will keep you updated.',
    position: 'right',
    isTail: true,
  },
]

// expected = []

const getSortedMessages = (
  messages: RootStoreType['messages']
): RootStoreType['messages'] =>
  messages.sort(
    (a, b) => (a.createdAt ? a.createdAt : 0) - (b.createdAt ? b.createdAt : 0)
  )

/**
 * @test yarn jest getChainedResponsibility.test
 */
describe('Test function getChainedResponsibility', () => {
  it('test with forEach, but without .done()', () => {
    const idProfileHost = '1'

    const execTuple: ExecDictType[] = [
      {
        func: getMessagesWithProfileActive,
        options: {
          idProfileHost,
          idProfileActive: '4',
        },
      },
      {
        func: getPreproccedMessages,
        options: { idProfileHost },
      },
      {
        func: getSortedMessages,
      },
    ]

    const outputed = getChainedResponsibility(messages).forEach(execTuple)

    // consoler('getChainedResponsibility.test [27]', 'output', outputed)

    expect(outputed).toEqual(expected)
  })

  it('test with forEach', () => {
    const idProfileHost = '1'

    const execTuple: ExecDictType[] = [
      {
        func: getMessagesWithProfileActive,
        options: {
          printRes: false,
          idProfileHost,
          idProfileActive: '4',
        },
      },
      {
        isActive: true,
        func: getPreproccedMessages,
        options: { idProfileHost },
      },
      {
        printRes: false,
        func: getSortedMessages,
      },
    ]

    const outputed = getChainedResponsibility(messages).forEach(execTuple)

    // consoler('getChainedResponsibility.test [27]', 'output', outputed)

    expect(outputed).toEqual(expected)
  })

  it('test with exec and done', () => {
    const idProfileHost = '1'

    const outputed = getChainedResponsibility(messages)
      .exec(getMessagesWithProfileActive, {
        printRes: false,
        idProfileHost,
        idProfileActive: '4',
      })
      .exec(getPreproccedMessages, { idProfileHost })
      .exec(getSortedMessages)
      .done()

    // consoler('getChainedResponsibility.test [27]', 'output', outputed)

    expect(outputed).toEqual(expected)
  })
})
