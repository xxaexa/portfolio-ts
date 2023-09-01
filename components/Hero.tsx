'use client'

import { stack } from '@/constant'

const Hero = () => {
  return (
    <div
      id="home"
      className="mx-auto px-4  md:px-0 md:w-4/6 lg:min-h-screen grid text-3xl">
      <div className="w-full grid mt-24">
        <div className="flex justify-center items-center">
          <div className="text-center mx-auto">
            <h2 className="my-6">HI IM ANDRE</h2>
            <p className="my-6">{"NOW I'M A FRONT END DEVELOPER"}</p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <p className="text-center">SKILLS</p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-8 place-items-center place-content-center">
          {stack.map((s, index) => (
            <div
              key={index}
              className="text-5xl hover:text-indigo-500 duration-500 ease-in-out">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Hero
