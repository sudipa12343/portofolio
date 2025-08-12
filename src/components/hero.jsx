"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Sudipayasa</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
          Full Stack Developer & IT Student
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          I design and develop engaging digital experiences by combining modern technologies, thoughtful user-centric design, and clean, efficient code — transforming ideas into elegant, high-performing solutions that leave a lasting impression.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-delay-3">
          {}
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-white dark:bg-dark text-black dark:text-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
          >
            View My Work
          </Button>

          {}
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300"
          >
            <a href="/Cv_SudipaYasa.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  )
}
