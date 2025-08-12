"use client"

import { Card, CardContent } from "./ui/card"
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaBootstrap, FaGitAlt, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiLaravel, SiTailwindcss, SiMysql, SiFigma } from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ]

  return (
  <section id="skills" className="py-20 relative z-10 transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

}
