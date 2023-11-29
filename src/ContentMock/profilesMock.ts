import { ProfileType, ProfileNatureType } from '../@types/GraphqlTypes'

export const profiles: ProfileType[] = [
  {
    profileID: '16',
    userID: '1',
    profileName: '@yourails',
    isActive: true,
    profileNature: ProfileNatureType['Company'],
    nameFirst: 'YouRails.com',
    nameLast: '',
    position: 110,
    avatarSrc: 'https://yourails.com/images/promo01/logo-2023-06-18-2.jpeg',
    // https://yourails.com/images/logoYouRails/logoYouRails-ChAlR-001.png
    // https://yourails.com/images/promo01/logo-2023-06-18-2.jpeg
    // https://yourails.com/images/sphinx-01.jpg
    avatarSize: { width: 45, height: 45 },
    phones: ['415-650-9893'],
    emails: ['t3531350@yahoo.com'],
    messengers: [{ name: 'Telegram', profileName: '@rome_sfba2' }],
    locations: ['San Francisco, CA'],
    serviceSpecs: ['AI Chat Marketplace Aggregator'],
    promptExamples: [],
    summary: `YouRails.com is an AI marketplace. It brings AI engineers, end users, and enterprise customers together.
    
Our mission is to help to "Discover AI and People, Create a New Environment for a Better Life"

AI engineers find the specialized chat format and cloud engine. 

End users discover AI models in one place (like NLP, CV, STT, etc.) to try, use, rate, and review in a convenient yet dedicated chat user interface. 

Enterprise users can integrate AI solutions into their sites and business processes, securely separating AI from other modes of communication.

For AI engineers:
1. Connect existing AI models to our chat interface. 
2. Display AI models as AI chats. Collect analytics and feedback.
3. Provide monetization options.

For End users:
1. Multiple AI products in one place – from text generation to computer vision. From freeware to freemium.
2. WhatsApp-like chat functionality:  groups, message forwarding, channels.
3. Groups with AI personas, like Example.com, Einstein, or Pushkin. 

For Enterprise users: 
1. Various integration options: iframe and unified of one endpoint API for all AI models.
2. Access AI products via SSO and JWT tokens.
3. Dynamically order or change AI vendors depending on the current requirements of projects.
4. Separation of AI communication from other enterprise communication channels such as Slack / Teams, etc.
5. Availability to configure special Assurance Guardian Scenarios (AGS) such as “No Trust” filters for inputs (exclude sensitive data input), “Human Oversight” (no copy-paste without explicit revision), “AI Usage Declaration”, etc.  
`,
  },

  {
    profileID: '1',
    userID: '1',
    profileName: '@rome',
    isActive: true,
    profileNature: ProfileNatureType['Human'],
    nameFirst: 'Roman',
    nameLast: 'Ches',
    position: 110,
    avatarSrc: 'https://yourails.com/images/sphinx-01.jpg', // https://yourails.com/images/users/avatar-rome.jpg
    avatarSize: { width: 45, height: 45 },
    phones: ['415-650-9893'],
    emails: ['t3531350@yahoo.com'],
    messengers: [{ name: 'Telegram', profileName: '@rome_sfba2' }],
    locations: ['Remote', 'San Francisco, CA'],
    serviceSpecs: ['Full Stack Developer', 'Machine Learning'],
    summary:
      '\
Full Stack Engineer with 12+ years of experience: a broad overview from MERN to LAMP, from AWS CDK to AI and Machine Learning.\n\
Frontend and backend Javascript, Typescript, ES6, 4 in React-Native, 8 in React.js, Redux, GraphQL, REST API, Node.js, AWS serverless: CDK, CloudFront, Lambda, API Gateway, Python, AI-ML: a broad outlook from MERN design patterns to LAMP OOP and focus on product requirements\n\
ML and AI include Tensorflow, Keras, NumPy, Pandas, SciPy, Matplotlib, PyTorch, AWS, API\n\
',
  },

  {
    profileID: '5',
    userID: '5',
    profileName: '@darrell',
    profileNature: ProfileNatureType['Human'],
    isActive: true,
    nameFirst: 'Darrell',
    nameLast: 'Ross',
    position: 160,
    avatarSrc: '',
    phones: ['415-000-0000'],
    emails: ['example@site.com'],
    messengers: [],
    locations: ['San Mateo, CA'],
    serviceSpecs: ['Engineer'],
    summary: '',
  },

  {
    profileID: '4',
    userID: '4',
    profileName: '@wilson',
    isActive: true,
    profileNature: ProfileNatureType['Human'],
    nameFirst: 'Alicia',
    nameLast: 'Wilson',
    position: 150,
    avatarSrc:
      'https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,g_auto,w_50,h_50,q_auto,f_auto,fl_lossy/dpr_2.0/usr/RSRzgow.png',
    avatarSize: { width: 45, height: 45 },
    phones: ['650-000-0000'],
    emails: ['example2@site.com'],
    messengers: [],
    locations: ['San Moon, CA'],
    serviceSpecs: ['Technical support'],
    summary: '',
  },

  {
    profileID: '3',
    userID: '3',
    profileName: '@trivedi',
    isActive: true,
    profileNature: ProfileNatureType['Human'],
    nameFirst: 'Jack',
    nameLast: 'Trivedi',
    position: 140,
    avatarSrc:
      'https://raw.githubusercontent.com/webkul/vivid/master/icons/badge.svg',
    avatarSize: { width: 45, height: 45 },
    phones: ['415-000-0000'],
    emails: ['example@site.com'],
    messengers: [],
    locations: ['San City, CA'],
    serviceSpecs: ['Technical recruiter'],
    summary: '',
  },

  {
    profileID: '0',
    userID: '0',
    profileName: '@guest',
    isActive: true,
    profileNature: ProfileNatureType['Human'],
    nameFirst: '',
    nameLast: 'Guest',
    position: 110,
    avatarSrc:
      'https://images.macrumors.com/t/x_zUFqghBUNBxVUZN_dYoKF3D9g=/1600x0/article-new/2019/04/guest-user-250x250.jpg',
    avatarSize: { width: 45, height: 45 },
    phones: [],
    emails: [],
    messengers: [],
    locations: [],
    serviceSpecs: [],
    summary: '',
  },
]
