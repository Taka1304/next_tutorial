import React, { FC } from 'react'

import Tile from '../Atoms/Tile'

type Props = {
  guessHistory: string[]
  answer: string
}

const checkGuess = ( char: string, index: number, answer: string ) => {
  // [課題]答えを判定する条件式を書く
	if (0) {
		// 答え(answer)のindex番目の文字がcharと一致するとき
		return "correct"
	} else if (0) {
		// 答え(answer)の中のどこかに、charが存在するとき
		return "wrong"
	}
	// それ以外
  return "none"
}

const Board: FC<Props> = ({ guessHistory, answer }) => {
  return (
    <div className="flex flex-col w-full h-full">
      {guessHistory.map( word => (
        <div className="flex flex-row items-center justify-center" key={word}>
        {word.split("").map(( char, index ) => (
          <Tile key={index} colorFlag={checkGuess(char, index, answer)}>
            {char}
          </Tile>
        ))}
        </div>
      ))}
    </div>
  )
}

export default Board