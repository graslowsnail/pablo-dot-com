"use client"

import { useEffect, useState } from "react"

export default function Component() {
  const [showCursor, setShowCursor] = useState(true)
  const [typewriterText, setTypewriterText] = useState("")
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false)
  const [glitchingChars, setGlitchingChars] = useState<Set<number>>(new Set())
  const [glitchChars, setGlitchChars] = useState<{[key: number]: string}>({})
  const [textGlitchingChars, setTextGlitchingChars] = useState<Set<number>>(new Set())
  const [textGlitchChars, setTextGlitchChars] = useState<{[key: number]: string}>({})
  const fullText = "A Brooklyn-based AI Engineer who builds and creates everything from cars to art to code"

  // Matrix-style characters for glitch effect
  const matrixChars = "█▓▒░▀▄▌▐■□▪▫◆◇◾◽⬛⬜"
  const textMatrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

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
        setIsTypewriterComplete(true)
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // ASCII glitch effect - no delay, starts immediately
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // Randomly select 1-2 characters to glitch in ASCII
      const numCharsToGlitch = Math.random() > 0.5 ? 1 : 2
      const newGlitching = new Set<number>()
      const newGlitchChars: {[key: number]: string} = {}
      
      // Get total characters in ASCII art
      const totalAsciiChars = asciiName.join('').length
      
      for (let i = 0; i < numCharsToGlitch; i++) {
        const randomIndex = Math.floor(Math.random() * totalAsciiChars)
        newGlitching.add(randomIndex)
        newGlitchChars[randomIndex] = matrixChars[Math.floor(Math.random() * matrixChars.length)]
      }
      
      setGlitchingChars(newGlitching)
      setGlitchChars(newGlitchChars)
      
      // Reset glitch after 200ms
      setTimeout(() => {
        setGlitchingChars(new Set())
        setGlitchChars({})
      }, 200)
      
    }, 1000 + Math.random() * 2000) // Random interval between 1-3 seconds
    
    return () => clearInterval(glitchInterval)
  }, [matrixChars])

  // Text glitch effect - starts after typewriter completes
  useEffect(() => {
    if (!isTypewriterComplete) return

    const textGlitchInterval = setInterval(() => {
      // Randomly select 1-3 characters to glitch in text
      const numCharsToGlitch = Math.floor(Math.random() * 3) + 1
      const newTextGlitching = new Set<number>()
      const newTextGlitchChars: {[key: number]: string} = {}
      
      for (let i = 0; i < numCharsToGlitch; i++) {
        const randomIndex = Math.floor(Math.random() * fullText.length)
        if (fullText[randomIndex] !== ' ') { // Don't glitch spaces
          newTextGlitching.add(randomIndex)
          newTextGlitchChars[randomIndex] = textMatrixChars[Math.floor(Math.random() * textMatrixChars.length)]
        }
      }
      
      setTextGlitchingChars(newTextGlitching)
      setTextGlitchChars(newTextGlitchChars)
      
      // Reset glitch after 150ms
      setTimeout(() => {
        setTextGlitchingChars(new Set())
        setTextGlitchChars({})
      }, 150)
      
    }, 2000 + Math.random() * 4000) // Random interval between 2-6 seconds
    
    return () => clearInterval(textGlitchInterval)
  }, [isTypewriterComplete, textMatrixChars, fullText])

  // ASCII art for "PABLO" - you can replace this with your actual name
  const asciiName = [
    "██████   █████  ██████  ██       ██████  ",
    "██   ██ ██   ██ ██   ██ ██      ██    ██ ",
    "██████  ███████ ██████  ██      ██    ██ ",
    "██      ██   ██ ██   ██ ██      ██    ██ ",
    "██      ██   ██ ██████  ███████  ██████  ",
  ]

  // Function to render ASCII with glitch
  const renderAsciiWithGlitch = () => {
    let charIndex = 0
    return asciiName.map((line, lineIndex) => (
      <div key={lineIndex}>
        {line.split('').map((char, charInLineIndex) => {
          const currentCharIndex = charIndex++
          const isGlitching = glitchingChars.has(currentCharIndex)
          
          return (
            <span
              key={charInLineIndex}
              className={`inline-block transition-all duration-75 ${
                isGlitching 
                  ? 'text-green-500 bg-green-500/20 animate-pulse scale-110' 
                  : ''
              }`}
            >
              {isGlitching ? glitchChars[currentCharIndex] : char}
            </span>
          )
        })}
      </div>
    ))
  }

  return (
    <div className="text-black font-mono flex flex-col xl:py-2 2xl:py-3">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* You Found - centered above ASCII */}
        <div className="text-gray-500 text-xl xl:text-2xl 2xl:text-3xl mb-4 xl:mb-6">You Found</div>

        {/* ASCII Name */}
        <div className="text-center mb-8 xl:mb-12">
          <pre className="text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">
            {renderAsciiWithGlitch()}
          </pre>
        </div>

        {/* Tagline */}
        <div className="text-gray-500 text-xl xl:text-2xl 2xl:text-3xl mb-8 xl:mb-12">I Build Things.</div>

        {/* Terminal-style status */}
        <div className="text-black text-md xl:text-lg 2xl:text-xl text-center max-w-2xl xl:max-w-4xl 2xl:max-w-5xl px-4">
          {isTypewriterComplete ? (
            <span>
              {fullText.split('').map((char, index) => {
                const isGlitching = textGlitchingChars.has(index)
                
                return (
                  <span 
                    key={index}
                    className={`inline-block transition-all duration-200 ${
                      isGlitching
                        ? 'text-green-500 bg-green-500/20 scale-110 animate-pulse' 
                        : ''
                    }`}
                  >
                    {isGlitching 
                      ? textGlitchChars[index] 
                      : (char === ' ' ? '\u00A0' : char)
                    }
                  </span>
                )
              })}
            </span>
          ) : (
            <span>{typewriterText}</span>
          )}
          <span className={`ml-2 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
        </div>
      </div>
    </div>
  )
}
