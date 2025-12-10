"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">
        <Link href="/" className={`text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
         Shree Jayanti Nirman Sewa
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? isScrolled
                        ? "text-yellow-600"
                        : "text-yellow-400"
                      : isScrolled
                        ? "text-gray-700 hover:text-yellow-600"
                        : "text-white hover:text-yellow-400"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="tel:+1234567890"
                className={`flex items-center rounded-md ${
                  isScrolled
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "bg-yellow-500 text-black hover:bg-yellow-400"
                } px-4 py-2 text-sm font-medium transition-colors`}
              >
                <Phone className="mr-2 h-4 w-4" />
              01-4993108
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 bg-white p-4 shadow-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 text-sm font-medium ${
                    pathname === link.href ? "text-yellow-600" : "text-gray-700 hover:text-yellow-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                +123 456 7890
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
