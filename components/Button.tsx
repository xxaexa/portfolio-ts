'use client'
import { ButtonProps } from '@/types'

const Button = ({ title, link, handleClick }: ButtonProps) => {
  return (
    <a href={link}>
      <button
        className="rounded-lg bg-indigo-500 w-32 text-center text-white hover:bg-indigo-100 hover:text-black tracking-widest"
        onClick={handleClick}
        type="button">
        {title}
      </button>
    </a>
  )
}

export default Button
