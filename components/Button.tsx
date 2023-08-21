'use client'
import { ButtonProps } from '@/types'

const Button = ({ title, link }: ButtonProps) => {
  return (
    <a href={link} target="_blank">
      <button
        className="rounded-lg bg-indigo-500 w-32 text-center text-white hover:bg-indigo-100 hover:text-indigo-500 tracking-widest"
        type="button">
        {title}
      </button>
    </a>
  )
}

export default Button
