"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ScrollAnimation } from './scroll-animation'
import { useState } from 'react'

const skills = [
  { name: 'Machine Learning', items: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'], icon: '🤖' },
  { name: 'Deep Learning', items: ['Neural Networks', 'CNN', 'RNN', 'Transformers'], icon: '🧠' },
  { name: 'Data Science', items: ['Data Analysis', 'Data Visualization', 'Statistical Modeling'], icon: '📊' },
  { name: 'Programming', items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'], icon: '💻' },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 static-bg">
      <ScrollAnimation>
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      </ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <ScrollAnimation key={skill.name}>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <span className="text-2xl">{skill.icon}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    {skill.items.map((item) => (
                      <motion.li 
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.7, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}

