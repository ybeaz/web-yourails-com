import { ProfileType } from '../@types/ProfileType'

export const profiles: ProfileType[] = [
  {
    idProfile: '1',
    idUser: '1',
    profileName: '@rome',
    nameFirst: 'Roman',
    nameLast: 'Ches',
    uriAvatar: 'https://yourails.com/images/_VVS3415-crop-4k.jpg',
    phones: ['415-650-9893'],
    emails: ['t3531350@yahoo.com'],
    messengers: [{ name: 'Telegram', profileName: '@rome_sfba2' }],
    locations: ['Remote', 'San Francisco, CA'],
    serviceSpecs: ['Full Stack Developer', 'Machine Learning'],
    summary:
      '\
Full Stack Engineer with 12+ years of experience: a broad overview from MERN to LAMP, from AWS CDK to AI and Machine Learning.\n\
Frontend and backend Javascript, Typescript, ES6, 4 in React-Native, 8 in React.js, Redux, GraphQL, REST API, Node.js, AWS serveless: CDK, CloudFront, Lambda, API Gateway, Python, AI-ML: a broad outlook from MERN design patterns to LAMP OOP and focus on product requirements\n\
ML and AI include Tensorflow, Keras, NumPy, Pandas, SciPy, Matplotlib, PyTorch, AWS, API\n\
',
  },
  {
    idProfile: '2',
    idUser: '2',
    profileName: '@smid',
    nameFirst: 'Dmitrii',
    nameLast: 'Smid',
    uriAvatar: 'https://yourails.com/images/sphinx-01.jpg',
    phones: ['415-340-9293'],
    emails: ['smiddist@gmail.com'],
    messengers: [],
    locations: ['San Francisco, CA'],
    serviceSpecs: ['Electrician', 'Appliance technician'],
    summary:
      'Motivated and detail-oriented electrician with experience in installing and maintaining electrical systems in residential settings. Skilled in using hand and power tools to complete tasks accurately and efficiently.',
  },
]
