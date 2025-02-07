"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const MagneticCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const magnetizeElements = () => {
      const magneticElements = document.querySelectorAll('[data-magnetic]')
      
      magneticElements.forEach((elem) => {
        elem.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = elem.getBoundingClientRect()
          const centerX = left + width / 2
          const centerY = top + height / 2
          const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))
          
          if (distance < 100) {
            const magnetStrength = 0.3
            mouseX.set(e.clientX - (e.clientX - centerX) * magnetStrength)
            mouseY.set(e.clientY - (e.clientY - centerY) * magnetStrength)
          }
        })
      })
    }

    window.addEventListener('mousemove', moveCursor)
    magnetizeElements()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  )
}

