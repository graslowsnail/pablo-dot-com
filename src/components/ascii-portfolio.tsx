"use client"

import { useEffect, useState } from "react"

export default function Component() {
  const [showCursor, setShowCursor] = useState(true)
  const [typewriterText, setTypewriterText] = useState("")
  const fullText = "A Brooklyn-based AI Engineer who builds and creates everything from cars to art to code"

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // ASCII art for "PABLO" - you can replace this with your actual name
  const asciiName = [
    "██████   █████  ██████  ██       ██████  ",
    "██   ██ ██   ██ ██   ██ ██      ██    ██ ",
    "██████  ███████ ██████  ██      ██    ██ ",
    "██      ██   ██ ██   ██ ██      ██    ██ ",
    "██      ██   ██ ██████  ███████  ██████  ",
  ]

  return (
    <div className="text-black font-mono flex flex-col xl:py-2 2xl:py-3">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* You Found - centered above ASCII */}
        <div className="text-gray-500 text-xl xl:text-2xl 2xl:text-3xl mb-4 xl:mb-6">You Found</div>

        {/* ASCII Name */}
        <div className="text-center mb-8 xl:mb-12">
          <pre className="text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">
            {asciiName.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </pre>
        </div>

        {/* Tagline */}
        <div className="text-gray-500 text-xl xl:text-2xl 2xl:text-3xl mb-8 xl:mb-12">I Build Things.</div>

        {/* Terminal-style status */}
        <div className="text-black text-md xl:text-lg 2xl:text-xl text-center max-w-2xl xl:max-w-4xl 2xl:max-w-5xl px-4">
          <span>{typewriterText}</span>
          <span className={`ml-2 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
        </div>
      </div>
    </div>
  )
}
