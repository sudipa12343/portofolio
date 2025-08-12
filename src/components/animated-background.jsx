"use client"

export default function AnimatedBackground({ darkMode }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient that changes with dark mode */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}
      ></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse transition-all duration-500 ${
            darkMode ? "bg-gradient-to-r from-gray-800 to-gray-700" : "bg-gradient-to-r from-gray-200 to-gray-300"
          }`}
        ></div>
        <div
          className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-2000 transition-all duration-500 ${
            darkMode ? "bg-gradient-to-r from-gray-700 to-gray-600" : "bg-gradient-to-r from-gray-300 to-gray-400"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-4000 transition-all duration-500 ${
            darkMode ? "bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gradient-to-r from-gray-100 to-gray-200"
          }`}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-10 w-4 h-4 rotate-45 animate-float opacity-20 transition-colors duration-500 ${
            darkMode ? "bg-gray-600" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`absolute top-40 right-20 w-6 h-6 rounded-full animate-float-delayed opacity-20 transition-colors duration-500 ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-40 left-20 w-3 h-3 rotate-45 animate-float-slow opacity-20 transition-colors duration-500 ${
            darkMode ? "bg-gray-500" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-40 w-5 h-5 rounded-full animate-float opacity-20 transition-colors duration-500 ${
            darkMode ? "bg-gray-600" : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`absolute top-60 left-1/3 w-2 h-2 rotate-45 animate-float-delayed opacity-20 transition-colors duration-500 ${
            darkMode ? "bg-gray-400" : "bg-gray-600"
          }`}
        ></div>
        <div
          className={`absolute top-80 right-1/3 w-4 h-4 rounded-full animate-float-slow opacity-20 transition-colors duration-500 ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? "opacity-10" : "opacity-5"}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px),
            linear-gradient(90deg, ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Radial gradient overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          darkMode
            ? "bg-gradient-radial from-transparent via-transparent to-black/20"
            : "bg-gradient-radial from-transparent via-transparent to-white/20"
        }`}
      ></div>
    </div>
  )
}
