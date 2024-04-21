'use client';
import clsx from "clsx"
import { FC, PropsWithChildren } from "react"

interface Props {
  isPrimary?: boolean
  onClick?: () => void
  text?: string
  styles?: string
}

export const Button:FC<PropsWithChildren<Props>> =({ 
  isPrimary = true,
  text = '',
  children,
  onClick,
  styles
}) => {
  const stylesForPrimary = () => {
    return isPrimary && 'text-white bg-blue-500 hover:bg-blue-700'
  }

  const stylesForSecondary = () => {
    return !isPrimary && 'bg-white text-blue-500 border border-blue-500 hover:text-blue-800'
  }

  return (
    <button 
      className={clsx([
        'flex h-min gap-1 rounded py-2 px-6 transition-all',
        stylesForPrimary(),
        stylesForSecondary(),
        styles
      ])}
      onClick={onClick}
    >
      {children}
      <span>{text}</span>
    </button>
  );
}


