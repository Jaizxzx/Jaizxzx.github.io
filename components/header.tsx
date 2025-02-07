"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import type React from "react"

export default function Header() {
  const scrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="min-h-screen flex flex-col relative overflow-hidden static-bg">
      <div className="flex justify-between items-center p-4 md:p-6 lg:p-8 relative z-10">
        <Link href="/" className="text-2xl font-bold" data-magnetic>
          AI/ML Portfolio
        </Link>
        <ThemeSwitcher />
      </div>
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4 md:px-6 lg:px-8 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-magnetic
        >
          Jai Singh Rathore
        </motion.h1>
        <TypeAnimation
          sequence={[
            "AI/ML",
            2000,
            "Deep Learning",
            2000,
            "CUDA",
            2000,
            "Computer Vision",
            2000,
            "NLP",
            2000,
            "LLM",
            2000,
          ]}
          wrapper="p"
          speed={50}
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          repeat={Number.POSITIVE_INFINITY}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
            data-magnetic
            onClick={scrollToContact}
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
      <nav className="p-4 md:p-6 lg:p-8 relative z-10">
        <ul className="flex justify-center space-x-4">
          <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <a href="#skills" className="text-lg font-medium" data-magnetic onClick={scrollToSkills}>
              Skills
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/projects" className="text-lg font-medium" data-magnetic>
              Projects
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <a href="#contact" className="text-lg font-medium" data-magnetic onClick={scrollToContact}>
              Contact
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/resume" className="text-lg font-medium" data-magnetic>
              Resume
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}

