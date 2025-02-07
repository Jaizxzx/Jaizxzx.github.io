"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const iframeStyle = `
  .default-cursor {
    cursor: default !important;
  }
  .default-cursor * {
    cursor: default !important;
  }
`

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <style jsx global>
        {iframeStyle}
      </style>
      <div className="min-h-screen static-bg py-20 px-4 md:px-6 lg:px-8 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Resume
        </motion.h1>
        <div className="w-full max-w-3xl bg-background rounded-lg shadow-lg overflow-hidden">
          {isLoading && (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
          )}
          <iframe src="/resume.pdf" className="w-full h-[800px] default-cursor" onLoad={() => setIsLoading(false)} />
        </div>
        <div className="mt-8 flex space-x-4">
          <Button asChild>
            <a href="/resume.pdf" download="Jai_Singh_Rathore_Resume.pdf">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

