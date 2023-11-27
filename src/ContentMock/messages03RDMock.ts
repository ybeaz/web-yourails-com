import { MessageType } from '../@types/MessageType'
import { MessageEventType } from '../@types/MessageEventType'

export const messages03RD: Omit<MessageType, 'position' | 'isTail'>[] = [
  {
    createdAt: 1673904347000,
    idMessage: 'abc123',
    idConversation: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: 'Hello! How can I assist you today?',
  },

  {
    createdAt: 1673904349000,
    idMessage: 'def456',
    idConversation: '["1","2"]',
    profileID: '1',
    eventType: MessageEventType['chatMessage'],
    text: 'Hi there! I recently purchased a new oven and I need help with the installation.',
  },

  {
    createdAt: 1673904351000,
    idMessage: 'ghi789',
    idConversation: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: "Sure, I'd be happy to help you with that. Could you provide me with the model and specifications of your oven?",
  },

  {
    createdAt: 1673904353000,
    idMessage: 'jkl012',
    idConversation: '["1","2"]',
    profileID: '1',
    eventType: MessageEventType['chatMessage'],
    text: "It's a stainless steel electric oven with dimensions of 30 inches wide. The model number is XYZ-123.",
  },

  {
    createdAt: 1673904355000,
    idMessage: 'mno345',
    idConversation: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: "Great! I'll need to check if the electrical wiring in your kitchen can support the oven's power requirements. Do you know the voltage and amperage needed for the oven?",
  },

  {
    createdAt: 1673904357000,
    idMessage: 'pqr678',
    idConversation: '["1","2"]',
    profileID: '1',
    eventType: MessageEventType['chatMessage'],
    text: 'The voltage required is 240V, and it needs a 40-amp circuit. I believe my kitchen should have the appropriate wiring.',
  },

  {
    createdAt: 1673904359000,
    idMessage: 'stu901',
    idConversation: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: 'That should work fine. Just to confirm, do you have the necessary outlet in place, or will we need to install one as well?',
  },

  {
    createdAt: 1673904361000,
    idMessage: 'vwx234',
    idConversation: '["1","2"]',
    profileID: '1',
    eventType: MessageEventType['chatMessage'],
    text: "I already have a dedicated outlet for the oven. It's a 4-prong 240V outlet, so it should be compatible.",
  },

  {
    createdAt: 1673904363000,
    idMessage: 'yza567',
    idConversation: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: 'Perfect! In that case, I can schedule a convenient time to come over and install your new oven. How does next Wednesday morning sound to you?',
  },

  {
    createdAt: 1673904365000,
    idMessage: 'bcd890',
    idConversation: '["1","2"]',
    profileID: '1',
    eventType: MessageEventType['chatMessage'],
    text: 'Wednesday morning works well for me. Thank you for your help!',
  },
]
