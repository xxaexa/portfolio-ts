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
    id: 0,
    thumb: '/gi.png',
    title: 'GIDB',
    link: 'https://gidb-exa.netlify.app/',
    description:
      'This is a database about character,weapon and artifact in genshin impact',
    stack: 'Build With MERN + Tailwind',
  },
  {
    id: 1,
    thumb: '/ex.png',
    title: 'TOPUP',
    link: 'https://topup-exa.netlify.app/',
    description: 'Topup store for online game',
    stack: 'Build With MERN + Tailwind',
  },
  {
    id: 2,
    thumb: '/jva.png',
    title: 'JawaIn',
    link: 'https://jawa-in-xxaexa.vercel.app/',
    description: 'Build A landing page for course bahasa jawa',
    stack: 'Build Next + Tailwind',
  },
  {
    id: 3,
    thumb: '/gya.png',
    title: 'Gyarari',
    link: 'https://github.com/xxaexa/gyarari-full-stack',
    description: 'build a gallery where you can upload and download here',
    stack: 'Build With MERN + Tailwind',
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
