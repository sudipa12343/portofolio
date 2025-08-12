"use client"

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="./about.png"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm I Putu Sudipa Yasa, a dedicated IT student with a strong passion for modern web development and Web3 technologies. Proficient in HTML, CSS, JavaScript, Laravel, Tailwind CSS, and React, I enjoy transforming ideas into responsive, user-friendly applications while applying creative problem-solving and clean coding practices. Through projects like HydroWash and LaporYukk, I continue to sharpen my skills, adapt to new technologies, and strive to deliver innovative, high-quality digital solutions that make an impact.
            </p>


          </div>
        </div>
      </div>
    </section>
  )
}
