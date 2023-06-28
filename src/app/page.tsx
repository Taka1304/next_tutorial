'use client'

import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import Board from "@/components/Molecules/Board";
import Header from "@/components/Layout/Header";
import WORDS from "@/utils/fiveWords.json";

// 入力フィールドの制御に使う正規表現, 半角英字のみ許可
const REGEXP = /[^A-Z]/g;

const MyApp: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [guessHistory, setGuessHistory] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('')

  const handleInputChange = ((e: ChangeEvent<HTMLInputElement>) => {
    // 大文字にして、半角英字以外消去
    const value = e.target.value.toUpperCase().replace(REGEXP, "")
    // 入力を5文字までにする
    if (REGEXP.test(e.target.value) && inputValue.length < 5 || value.length < 5) {
      setInputValue(value)
    }
    console.log(inputValue)
  })
	// 入力フィールドでEnterを押したとき
  const handleSubmit = ((e: FormEvent) => {
    e.preventDefault()
    // 入力が5文字かつ, まだ5回答えていない場合
    if (inputValue.length === 5 && guessHistory.length < 5) {
      setGuessHistory([...guessHistory, inputValue])
      setInputValue('')
    }
  })

  const handleReset = (() => {
		// [課題]Resetボタンを押したときに、State3つを初期化する

  })

  useEffect(() => {
    // [課題]答えをランダムで生成する

  },[])

  return (
    <div className="max-w-screen w-full min-h-screen flex flex-col bg-gray-900">      
			<Header>
        WORDLE
      </Header>
      <div>
        <button
          className="button"
          onClick={handleReset}
          >
          Reset
        </button>
      </div>
      <main className="flex flex-col items-center flex-grow-2">
        <Board 
          guessHistory={guessHistory} 
          answer={answer}
        />
        <form 
          className="h-12 w-[50vw]"
          onSubmit={handleSubmit}
          >
          <input
            autoComplete="off"
            type="text"
            className="w-full h-full font-bold text-2xl text-black"
            onChange={handleInputChange}
            value={inputValue}
          />
        </form>
      </main>
    </div>
)
}

export default MyApp