'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(true)

  return (
    <nav className="tracking-widest text-xl w-full absolute top-0 text-white font-crushed">
      {/* Desktop Nav */}
      <ul className="w-5/6 mx-auto flex flex-wrap justify-between py-3  items-center">
        <div className="">
          <li className="text-2xl font-bold cursor-pointer">EX A</li>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href={'#home'}>HOME</Link>
          <Link href={'#portfolio'}>PORTFOLIO</Link>
        </div>
      </ul>
      <button
        type="button"
        className="absolute top-3 right-3 md:hidden text-3xl cursor-pointer"
        onClick={() => {
          setIsMenuToggled(!isMenuToggled)
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* Mobile Nav */}
      <div className="relative">
        <ul
          className={`px-4 w-full md:hidden absolute flex flex-col transition-all duration-500 ease-in-out text-right ${
            isMenuToggled === true ? 'right-0' : 'right-[990px] overflow-hidden'
          }`}>
          <Link href={'#home'}>HOME</Link>
          <Link href={'#portfolio'}>PORTFOLIO</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
