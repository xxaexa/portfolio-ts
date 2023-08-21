import { social } from '@/constant'

const Navbar = () => {
  return (
    <nav className="tracking-widest text-xl w-full absolute top-0 text-white font-crushed">
      <div className="px-4 md:px-0 md:w-4/6 mx-auto flex flex-wrap justify-between py-3  items-center  ">
        <p className="text-3xl">ANDRE</p>
        <div className="flex justify-center space-x-6 my-4">
          {social.map((s) => (
            <a
              href={s.link}
              key={s.id}
              target="_blank"
              className="text-3xl hover:text-indigo-500 duration-500 ease-in-out">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
