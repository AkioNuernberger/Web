'use client'

import { useEffect, useState } from 'react'

interface Square {
  id: number
  size: number
  top: number
  left: number
  opacity: number
  duration: number
}

export default function AnimatedBackground() {
  const [squares, setSquares] = useState<Square[]>([])

  useEffect(() => {
    // Create initial squares
    const initialSquares = Array.from({ length: 20 }, (_, i) => createSquare(i))
    setSquares(initialSquares)

    // Update squares periodically
    const interval = setInterval(() => {
      setSquares(prev => {
        const newSquares = [...prev]
        const indexToUpdate = Math.floor(Math.random() * newSquares.length)
        newSquares[indexToUpdate] = createSquare(newSquares[indexToUpdate].id)
        return newSquares
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  function createSquare(id: number): Square {
    return {
      id,
      size: Math.random() * 20 + 10,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 10 + 5
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {squares.map(square => (
        <div
          key={square.id}
          className="absolute bg-gray-300 rounded-sm animate-float"
          style={{
            width: `${square.size}px`,
            height: `${square.size}px`,
            top: `${square.top}%`,
            left: `${square.left}%`,
            opacity: square.opacity,
            animation: `float ${square.duration}s infinite ease-in-out`
          }}
        />
      ))}
    </div>
  )
}

