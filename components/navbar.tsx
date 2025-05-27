"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-gray-800 bg-[#0A0A0A]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo size="sm" withText={true} href="/" className="flex items-center space-x-2" />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {[
              { name: "Benefícios", id: "beneficios" },
              { name: "Como Funciona", id: "como-funciona" },
              { name: "Depoimentos", id: "depoimentos" },
              { name: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-300 transition-colors hover:text-[#00FFAA]"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <button className="rounded-xl bg-[#00FFAA] px-6 py-2 font-medium text-black transition-all hover:scale-105 hover:bg-[#00FFAA]/90">
              Começar Grátis
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-20 z-30 transform bg-[#0A0A0A]/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto p-4 hidden">
          <nav className="flex flex-col space-y-4">
            {[
              { name: "Benefícios", id: "beneficios" },
              { name: "Como Funciona", id: "como-funciona" },
              { name: "Depoimentos", id: "depoimentos" },
              { name: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left rounded-xl border border-gray-800 bg-gray-900/50 p-4 text-lg font-medium text-white transition-colors hover:border-[#00FFAA] hover:text-[#00FFAA]"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
