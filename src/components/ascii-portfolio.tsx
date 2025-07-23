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
    <div className=" text-black font-mono flex flex-col">

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* You Found - centered above ASCII */}
        <div className="text-gray-500 text-xl md:text-xl mb-4">You Found</div>

        {/* ASCII Name */}
        <div className="text-center mb-8">
          <pre className="text-black text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
            {asciiName.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </pre>
        </div>

        {/* Tagline */}
        <div className="text-gray-500 text-xl md:text-xl mb-8">I Build Things.</div>

        {/* Terminal-style status */}
        <div className="text-black text-md text-center">
          <span>{typewriterText}</span>
          <span className={`ml-2 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
        </div>
      </div>


    </div>
  )
}
