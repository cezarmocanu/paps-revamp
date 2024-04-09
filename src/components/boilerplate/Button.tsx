import clsx from "clsx"
import { FC, PropsWithChildren } from "react"

interface Props {
  color?: string
  hoverColor?: string
  text?: string
}

export const Button:FC<PropsWithChildren<Props>> =({ 
  color='bg-blue-500', 
  hoverColor='bg-blue-700',
  text='',
  children
}) =>{
  return (
    <button className={clsx([
      'text-white flex h-min gap-1 rounded py-2 px-6 transition-all',
      color,
      `hover:${hoverColor}`,
      'text-white'
    ])}>
      {children}
      <span>{text}</span>
    </button>
  );
}


