'use client'
import { ButtonProps } from '@/types'

const Button = ({ title }: ButtonProps) => {
  return (
    <button
      className="rounded-lg bg-indigo-500 w-32 text-center text-white hover:bg-indigo-100 hover:text-black tracking-widest"
      type="button">
      {title}
    </button>
  )
}

export default Button
