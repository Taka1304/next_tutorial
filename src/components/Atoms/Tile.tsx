import React, { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  colorFlag: "correct" | "wrong" | "none"
}

const WordTile: FC<Props> = ({ children, colorFlag }) => {
  let backgroundColor = ""
  if (colorFlag === "correct") {
    backgroundColor = "bg-green-700";
  } else if (colorFlag === "wrong") {
    backgroundColor = "bg-yellow-500";
  } else if (colorFlag === "none") {
    backgroundColor = "bg-gray-700";
  }
  return (
    <div className={`h-16 w-16 ${backgroundColor} border border-gray-700 rounded-lg text-white flex flex-col justify-center items-center text-3xl font-bold`}>
      {children}
    </div>
  )
}

export default WordTile