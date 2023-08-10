import { social, stack } from '@/constant'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id="home" className="mx-auto w-5/6 sm:min-h-screen grid text-3xl">
      <div className="w-full grid mt-24">
        <div className="flex justify-center items-center">
          <div className="text-center mx-auto">
            <h2 className="my-6">HI IM ANDRE</h2>
            <p className="my-6">NOW I'M A FRONT END DEVELOPER</p>
            <Button title={'CV'} link="/CV.pdf" />
            <div className="flex justify-center space-x-6 my-4">
              {social.map((s) => (
                <a
                  href={s.link}
                  key={s.id}
                  target="_blank"
                  className="text-3xl hover:text-indigo-500">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <p className="text-center">SKILLS</p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-8 place-items-center place-content-center">
          {stack.map((s, index) => (
            <div key={index}>
              <Image
                src={s}
                width={150}
                height={150}
                alt={s}
                className="w-52 block hover:bg-white hover:bg-opacity-50 rounded-full duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Hero
