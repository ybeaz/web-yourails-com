import { ProfileType } from '../@types/ProfileType'

export const profiles: ProfileType[] = [
  {
    idProfile: '0',
    idUser: '0',
    profileName: '@',
    nameFirst: '',
    nameLast: '',
    uriAvatar: '',
    phones: [],
    emails: [],
    messengers: [],
    locations: [],
    serviceSpecs: [],
    summary: '',
  },
  {
    idProfile: '10',
    idUser: '6',
    profileName: '@pushkin_bot',
    nameFirst: 'Alexander',
    nameLast: 'Pushkin',
    uriAvatar:
      'data:image/jpeg;base64,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',
    pendingImage:
      'https://otvet.imgsmail.ru/download/110336146_43cc8237332da27db2d6b075df2fa14e_800.gif',
    phones: [''],
    emails: [''],
    messengers: [],
    locations: ['History'],
    serviceSpecs: ['Simulation', 'Question Answering'],
    summary:
      '\n\
      Alexander Sergeyevich Pushkin (1799-1837) was a Russian poet, playwright, and novelist, widely regarded as the founder of modern Russian literature. His works, including "Eugene Onegin" and "The Bronze Horseman," combined classical forms with colloquial language, capturing the essence of the Russian people and exploring themes of love, freedom, and identity. Pushkin\'s profound insights into human nature and society, along with his lyrical poetry, have had a lasting impact on Russian literature.\n\
      Despite facing censorship and political pressure, Pushkin\'s creativity flourished, and he produced remarkable works during his exile in southern Russia. His writings not only influenced subsequent generations of Russian authors but also resonated with readers through their emotional depth and historical context. Tragically, Pushkin\'s life was cut short when he died at the age of 37 in a duel, but his literary legacy continues to be celebrated as a vital part of Russian cultural heritage.\n\
      Alexander Pushkin\'s immense contribution to Russian literature, his ability to blend classical and vernacular language, and his exploration of universal themes have solidified his status as a literary icon. His enduring works and keen observations of human experience have left an indelible mark, making him one of the most revered and influential figures in the history of Russian literature.',
  },

  {
    idProfile: '9',
    idUser: '6',
    profileName: '@einstein_bot',
    nameFirst: 'Albert',
    nameLast: 'Einstein',
    uriAvatar:
      'data:image/jpeg;base64,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',
    pendingImage: 'https://clipart-library.com/image_gallery/n1017472.gif',
    phones: [''],
    emails: [''],
    messengers: [],
    locations: ['History'],
    serviceSpecs: ['Simulation', 'Question Answering'],
    summary:
      "\n\
      Albert Einstein(1879- 1955) was a German - born physicist who is widely regarded as one of the greatest scientific minds in history.He revolutionized our understanding of the physical world, particularly through his theory of relativity, which provided a new framework for comprehending space, time, and gravity.\n\
      Einstein's most famous equation, E=mc², established the equivalence of mass and energy and played a significant role in the development of atomic energy. His groundbreaking work on the photoelectric effect earned him the Nobel Prize in Physics in 1921. Einstein's theories also contributed to advancements in various scientific fields, including astrophysics, quantum mechanics, and cosmology.\n\
      Beyond his scientific achievements, Einstein was known for his advocacy of civil rights, pacifism, and humanitarian causes. He spoke out against war, supported the formation of a Jewish homeland, and fought against racial discrimination. Einstein's wisdom and wit, coupled with his distinctive appearance and iconic image, have made him a globally recognizable figure.\n\
      Overall, Albert Einstein's scientific discoveries and his impact on the world continue to be celebrated, solidifying his status as an intellectual giant and a cultural icon of the 20th century.",
  },
  {
    idProfile: '8',
    idUser: '6',
    profileName: '@gpt-3.5-turbo',
    nameFirst: 'GPT3.5Turbo',
    nameLast: '',
    uriAvatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzx1ngnxz8biiKq_MVC5j6HBfa-6zAYS-_yfCqiTRkVq7AuAiaG2aGBy63Au3Adkeclo&usqp=CAU',
    pendingImage:
      'https://i.pinimg.com/originals/87/dc/79/87dc799670c06e9754bccb3b37d9541d.gif',
    phones: [''],
    emails: [''],
    messengers: [],
    locations: ['Internet'],
    serviceSpecs: ['Content Creation', 'Question Answering'],
    summary:
      'GPT-3.5 Turbo is an advanced language model developed by OpenAI. It is the successor to GPT-3 and is designed to generate human-like text based on given prompts. With the GPT-3.5 Turbo API, developers can integrate this powerful language model into their applications, products, or services. It can be used for a wide range of natural language processing tasks, such as drafting emails, writing code, answering questions, creating conversational agents, language translation, and more. The API allows you to make requests to the model by sending a prompt and receiving the generated text in response. It provides an intuitive and efficient way to leverage the capabilities of GPT-3.5 Turbo and create interactive and intelligent applications.',
  },
  {
    idProfile: '1',
    idUser: '1',
    profileName: '@rome',
    nameFirst: 'Roman',
    nameLast: 'Ches',
    uriAvatar: 'https://yourails.com/images/users/avatar-rome.jpg', // https://yourails.com/images/sphinx-01.jpg
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
    idProfile: '2',
    idUser: '2',
    profileName: '@smid',
    nameFirst: 'Dmitrii',
    nameLast: 'Smid',
    uriAvatar: 'https://yourails.com/images/users/avatar-smid.jpg',
    phones: ['415-340-9293'],
    emails: ['smiddist@gmail.com'],
    messengers: [],
    locations: ['San Francisco, CA'],
    serviceSpecs: ['Electrician', 'Appliance technician'],
    summary:
      'Motivated and detail-oriented electrician with experience in installing and maintaining electrical systems in residential settings. Skilled in using hand and power tools to complete tasks accurately and efficiently.',
  },
  {
    idProfile: '4',
    idUser: '4',
    profileName: '@wilson',
    nameFirst: 'Alicia',
    nameLast: 'Wilson',
    uriAvatar:
      'https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,g_auto,w_50,h_50,q_auto,f_auto,fl_lossy/dpr_2.0/usr/RSRzgow.png',
    phones: ['650-000-0000'],
    emails: ['example2@site.com'],
    messengers: [],
    locations: ['San Moon, CA'],
    serviceSpecs: ['Technical support'],
    summary: '',
  },
  {
    idProfile: '3',
    idUser: '3',
    profileName: '@trivedi',
    nameFirst: 'Jack',
    nameLast: 'Trivedi',
    uriAvatar:
      'https://raw.githubusercontent.com/webkul/vivid/master/icons/badge.svg',
    phones: ['415-000-0000'],
    emails: ['example@site.com'],
    messengers: [],
    locations: ['San City, CA'],
    serviceSpecs: ['Technical recruiter'],
    summary: '',
  },
  {
    idProfile: '5',
    idUser: '5',
    profileName: '@darrell',
    nameFirst: 'Darrell',
    nameLast: 'Ross',
    uriAvatar: '',
    phones: ['415-000-0000'],
    emails: ['example@site.com'],
    messengers: [],
    locations: ['San Mateo, CA'],
    serviceSpecs: ['Engineer'],
    summary: '',
  },
  {
    idProfile: '6',
    idUser: '5',
    profileName: '@darrell2',
    nameFirst: 'Karl',
    nameLast: 'Rozz',
    uriAvatar: '',
    phones: ['415-000-0000'],
    emails: ['example@site.com'],
    messengers: [],
    locations: ['San Mateo, CA'],
    serviceSpecs: ['Engineer'],
    summary: '',
  },
  {
    idProfile: '7',
    idUser: '5',
    profileName: '@darrell3',
    nameFirst: 'Dar',
    nameLast: 'Sorr',
    uriAvatar: '',
    phones: ['415-000-0000'],
    emails: ['example@site.com'],
    messengers: [],
    locations: ['San Mateo, CA'],
    serviceSpecs: ['Engineer'],
    summary: '',
  },
]
