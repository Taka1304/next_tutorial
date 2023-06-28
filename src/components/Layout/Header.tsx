import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Header: FC<Props> = ({ children }) => {
  return (
    <header className="bg-gray-900 text-white font-bold text-2xl w-full h-16 flex items-center">
      <span className="px-6">{children}</span>
    </header>
  )
}

export default Header