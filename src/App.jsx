"use client"

import { useTheme } from "./components/ThemeProvider"
import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import AnimatedBackground from "./components/animated-background"

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      <div className={`bg-white dark:bg-black text-black dark:text-white relative min-h-screen`}>
        <AnimatedBackground darkMode={theme === "dark"} />

        <Header darkMode={theme === "dark"} toggleDarkMode={toggleTheme} />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 relative z-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 sudipayasa. Built with React, Vite, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
