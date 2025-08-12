"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/sudipa12343",
      description: "Check out my code and open source contributions",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/i-putu-sudipa-yasa-60642b335/",
      description: "Connect with me professionally",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dipayasa14@gmail.com",
      description: "Send me a direct message",
    },
  ]

  // Ambil email langsung dari socialLinks
  const emailLink = socialLinks.find(link => link.name === "Email")?.url || ""
  const emailText = emailLink.split("mailto:")[1] || ""

  return (
    <section id="contact" className="py-20 relative z-10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
            collaborate, or just want to say hi, feel free to reach out through any of these platforms!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Card
                key={link.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{link.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{link.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300 bg-transparent"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            Prefer email? Drop me a line at{" "}
            <a href={emailLink} className="text-black dark:text-white hover:underline font-medium">
              {emailText}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
