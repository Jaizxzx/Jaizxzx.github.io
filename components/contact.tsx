"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ScrollAnimation } from "./scroll-animation"
import { Mail, Github, Linkedin, Code } from "lucide-react"
import Link from "next/link"
import type React from "react" // Added import for React

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message })
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 static-bg flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimation>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailto:jai.singh.rathore@example.com" className="hover:underline">
                jaisinghrathore4432@gmail.com
              </a>
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <Link href="https://github.com/jaizxzx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/jaisinghrathore" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://leetcode.com/jaizxzx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Code className="h-5 w-5" />
                    <span className="sr-only">LeetCode</span>
                  </Button>
                </Link>
                <Link href="https://huggingface.co/jaizxzx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <span className="font-bold text-lg">🤗</span>
                    <span className="sr-only">Hugging Face</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

