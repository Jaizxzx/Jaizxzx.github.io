import Header from "@/components/header"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

