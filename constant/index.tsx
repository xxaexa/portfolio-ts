// social media icon
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

// skills icon
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si'

export const stack = [
  <SiJavascript />,
  <SiReact />,
  <SiRedux />,
  <SiNextdotjs />,
  <SiTailwindcss />,
  <SiExpress />,
  <SiNodedotjs />,
  <SiMongodb />,
]

export const portfolios = [
  {
    imageUrl: '/gi.png',
    title: 'Genshin DB',
    live: 'https://genshin-db-pi.vercel.app//',
    code: 'https://github.com/xxaexa/genshin-db',
    description:
      'Build a website to show artifact,character and weapon in genshin impact',
    tags: [
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiExpress />,
      <SiMongodb />,
    ],
  },
  {
    imageUrl: '/ex.png',
    title: 'TOPUP',
    live: 'https://topup-exa.netlify.app/',
    code: 'https://github.com/xxaexa/topup-mern',
    description: 'Build A web for Topup online game pc and mobile yes',
    tags: [
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiExpress />,
      <SiMongodb />,
    ],
  },
  {
    imageUrl: '/jva.png',
    title: 'JawaIn',
    live: 'https://jawa-in-xxaexa.vercel.app/',
    code: 'https://github.com/xxaexa/jawa-in-ts',
    description: 'Build A landing page for course bahasa jawa in semarang',
    tags: [<SiTypescript />, <SiReact />, <SiNextdotjs />, <SiTailwindcss />],
  },
  {
    imageUrl: '/gya.png',
    title: 'Gyarari',
    live: 'https://gyarari-frontend.vercel.app/',
    code: 'https://github.com/xxaexa/gyarari-full-stack',
    description: 'build a gallery where you can upload and download here',
    tags: [
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiExpress />,
      <SiMongodb />,
      <SiFirebase />,
    ],
  },
  {
    imageUrl: '/chat.png',
    title: 'Chat Apps',
    live: 'https://chat-5rae81xrm-xxaexa.vercel.app',
    code: 'https://github.com/xxaexa/chat-app-next',
    description: 'build a chat apps where you can chat with your friend ',
    tags: [<SiReact />, <SiNextdotjs />, <SiTailwindcss />, <SiFirebase />],
  },
]

export const social = [
  {
    id: 1,
    title: 'Ig',
    icon: <FaInstagramSquare />,
    link: 'https://www.instagram.com/andreekaaa1/',
  },
  {
    id: 2,
    title: 'Linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/andre-eka-94009b279/',
  },
  {
    id: 3,
    title: 'Github',
    icon: <FaGithubSquare />,
    link: 'https://github.com/xxaexa',
  },
]
