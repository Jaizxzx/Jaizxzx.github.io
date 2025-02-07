"use client"

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CreativeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawNeuralNetwork = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodeCount = 50
      const nodes: { x: number; y: number }[] = []

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        })
      }

      ctx.strokeStyle = 'rgba(var(--foreground), 0.1)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
          )
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(var(--foreground), 0.3)'
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    resizeCanvas()
    drawNeuralNetwork()

    window.addEventListener('resize', () => {
      resizeCanvas()
      drawNeuralNetwork()
    })

    const animateBackground = () => {
      drawNeuralNetwork()
      requestAnimationFrame(animateBackground)
    }

    animateBackground()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

export default CreativeBackground

