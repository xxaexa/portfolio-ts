'use client'

import { stack } from '@/constant'
import Image from 'next/image'
import { useState } from 'react'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      id="home"
      className="mx-auto px-4  md:px-0 md:w-4/6 lg:min-h-screen grid text-3xl">
      {isOpen && (
        <>
          <div
            className="fixed w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          p-10">
            <div className="flex flex-col justify-center items-center min-h-screen ">
              <div className="bg-black p-4 rounded-xl bg-opacity-50">
                <h2 className="text-center">DOWNLOAD CV</h2>
                <div className="flex flex-col md:flex-row gap-12 my-12">
                  <a href="/CV.pdf">
                    <button
                      className="rounded-lg bg-indigo-500 w-48 text-center text-white hover:bg-indigo-100 hover:text-indigo-500 tracking-widest duration-500 ease-in-out"
                      onClick={handleClick}>
                      INDONESIA
                    </button>
                  </a>
                  <a href="/CV-ENG.pdf">
                    <button
                      className="rounded-lg bg-indigo-500 w-48 text-center text-white hover:bg-indigo-100 hover:text-indigo-500 tracking-widest duration-500 ease-in-out"
                      onClick={handleClick}>
                      ENGLISH
                    </button>
                  </a>
                </div>
                <button
                  className="mx-auto block rounded-lg bg-white w-48 text-center text-red-400 hover:bg-red-400 hover:text-white tracking-widest duration-500 ease-in-out"
                  onClick={handleClick}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="w-full grid mt-24">
        <div className="flex justify-center items-center">
          <div className="text-center mx-auto">
            <h2 className="my-6">HI IM ANDRE</h2>
            <p className="my-6">{"NOW I'M A FRONT END DEVELOPER"}</p>
            <button
              className="rounded-lg bg-indigo-500 w-32 text-center text-white hover:bg-indigo-100 hover:text-indigo-500 tracking-widest duration-500 ease-in-out"
              type="button"
              onClick={handleClick}>
              GET CV
            </button>
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
