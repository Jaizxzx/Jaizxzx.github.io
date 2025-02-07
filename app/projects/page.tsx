"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Image Classification Model",
    description: "Developed a CNN-based image classification model achieving 98% accuracy on the CIFAR-10 dataset.",
    tags: ["Deep Learning", "CNN", "PyTorch"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "Created an NLP-powered chatbot using transformer architecture for customer support automation.",
    tags: ["NLP", "Transformers", "TensorFlow"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Predictive Maintenance System",
    description: "Implemented a machine learning model to predict equipment failures, reducing downtime by 30%.",
    tags: ["Machine Learning", "Time Series Analysis", "Scikit-learn"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Sentiment Analysis Tool",
    description: "Built a sentiment analysis tool for social media posts using BERT, achieving 92% accuracy.",
    tags: ["NLP", "BERT", "PyTorch"],
    color: "from-red-500 to-yellow-500",
  },
  {
    title: "Autonomous Drone Navigation",
    description:
      "Developed an AI system for autonomous drone navigation in complex environments using reinforcement learning.",
    tags: ["Reinforcement Learning", "Computer Vision", "ROS"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Fraud Detection System",
    description:
      "Created a real-time fraud detection system for financial transactions using anomaly detection algorithms.",
    tags: ["Anomaly Detection", "Big Data", "Apache Spark"],
    color: "from-yellow-500 to-red-500",
  },
  {
    title: "Medical Image Segmentation",
    description:
      "Implemented a U-Net architecture for accurate segmentation of medical images, aiding in disease diagnosis.",
    tags: ["Deep Learning", "Image Segmentation", "TensorFlow"],
    color: "from-teal-500 to-blue-500",
  },
  {
    title: "Recommendation Engine",
    description: "Built a personalized recommendation engine for an e-commerce platform using collaborative filtering.",
    tags: ["Recommender Systems", "Matrix Factorization", "PySpark"],
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Automated Stock Trading Bot",
    description: "Developed an automated stock trading bot using LSTM networks for time series prediction.",
    tags: ["Time Series Analysis", "LSTM", "Keras"],
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Speech Recognition System",
    description:
      "Implemented a speech recognition system using deep learning techniques, achieving 95% accuracy in noisy environments.",
    tags: ["Speech Recognition", "RNN", "PyTorch"],
    color: "from-orange-500 to-red-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen static-bg py-20 px-4 md:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardVariants}>
            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }}>
              <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link href="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

