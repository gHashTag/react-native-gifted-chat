export default [
  {
    id: 9,
    text: '#awesome 3',
    createdAt: new Date(),
    user: {
      id: 1,
      name: 'Developer',
    },
  },
  {
    id: 8,
    text: '#awesome 2',
    createdAt: new Date(),
    user: {
      id: 1,
      name: 'Developer',
    },
  },
  {
    id: 7,
    text: '#awesome',
    createdAt: new Date(),
    user: {
      id: 1,
      name: 'Developer',
    },
  },
  {
    id: 6,
    text: 'Paris',
    createdAt: new Date(),
    user: {
      id: 2,
      name: 'React Native',
    },
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
    sent: true,
    received: true,
  },
  {
    id: 5,
    text: 'Send me a picture!',
    createdAt: new Date(),
    user: {
      id: 1,
      name: 'Developer',
    },
  },
  {
    id: 4,
    text: '',
    createdAt: new Date(),
    user: {
      id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
    location: {
      latitude: 48.864601,
      longitude: 2.398704,
    },
  },
  {
    id: 3,
    text: 'Where are you?',
    createdAt: new Date(),
    user: {
      id: 1,
      name: 'Developer',
    },
  },
  {
    id: 2,
    text: 'Yes, and I use #GiftedChat!',
    createdAt: new Date(),
    user: {
      id: 2,
      name: 'React Native',
    },
    sent: true,
    received: true,
  },
  {
    id: 1,
    text: 'Are you building a chat app?',
    createdAt: new Date(),
    user: {
      id: 1,
      name: 'Developer',
    },
  },
  {
    id: 10,
    text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: '😋 Yes',
          value: 'yes',
        },
        {
          title:
            '📷 Yes, let me show you with a picture! Again let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: '😞 Nope. What?',
          value: 'no',
        },
      ],
    },
    user: {
      id: 2,
      name: 'React Native',
    },
  },
  {
    id: 20,
    text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
    createdAt: new Date(),
    quickReplies: {
      type: 'checkbox', // or 'checkbox',
      values: [
        {
          title: 'Yes',
          value: 'yes',
        },
        {
          title: 'Yes, let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: 'Nope. What?',
          value: 'no',
        },
      ],
    },
    user: {
      id: 2,
      name: 'React Native',
    },
  },
  {
    id: 30,
    createdAt: new Date(),
    video: 'https://media.giphy.com/media/3o6ZthZjk09Xx4ktZ6/giphy.mp4',
    user: {
      id: 2,
      name: 'React Native',
    },
  },
  {
    id: 31,
    createdAt: new Date(),
    audio:
      'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
    user: {
      id: 2,
      name: 'React Native',
    },
  },
]
