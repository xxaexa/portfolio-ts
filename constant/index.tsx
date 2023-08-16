import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'

export const stack = [
  '/react.png',
  '/redux.png',
  '/next.png',
  '/tailwind.png',
  '/express.png',
  '/mongo.png',
  '/node.png',
]

export const portfolios = [
  {
    imageUrl: '/gi.png',
    title: 'Genshin DB',
    link: 'https://gidb-exa.netlify.app/',
    description:
      'Build A web to show character,artifact and character in Genshin Impact',
    tags: ['React', 'Redux', 'Tailwind', 'Express', 'MongoDB'],
  },
  {
    imageUrl: '/ex.png',
    title: 'TOPUP',
    link: 'https://topup-exa.netlify.app/',
    description: 'Topup store for online game',
    tags: ['React', 'Redux', 'Tailwind', 'Express', 'MongoDB'],
  },
  {
    imageUrl: '/jva.png',
    title: 'JawaIn',
    link: 'https://jawa-in-xxaexa.vercel.app/',
    description: 'Build A landing page for course bahasa jawa',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    imageUrl: '/gya.png',
    title: 'Gyarari',
    link: 'https://github.com/xxaexa/gyarari-full-stack',
    description: 'build a gallery where you can upload and download here',
    tags: ['React', 'Redux', 'Tailwind', 'Express', 'MongoDB'],
  },
]

export const social = [
  {
    id: 1,
    title: 'Ig',
    icon: <AiOutlineInstagram />,
    link: 'https://www.instagram.com/andreekaaa1/',
  },
  {
    id: 2,
    title: 'Linkedin',
    icon: <AiOutlineLinkedin />,
    link: 'https://www.linkedin.com/in/andre-eka-94009b279/',
  },
  {
    id: 3,
    title: 'Github',
    icon: <AiOutlineGithub />,
    link: 'https://github.com/xxaexa',
  },
]
