import { MouseEventHandler } from 'react'

export interface ButtonProps {
  title: string
  link: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface QueryProps {
  query: string
}
