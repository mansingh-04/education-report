"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar({ onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
    onMenuClick()
  }

  return (
    <header className="navbar earthy-navbar">
      <div className="navbar-container earthy-navbar-container">
        <div className="menu-toggle">
          <button onClick={handleMenuClick} className="menu-button">
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            {isMobile && <span className="menu-text">Menu</span>}
          </button>
        </div>

        <div className="navbar-title earthy-navbar-title">
          <h1>Education Feedback Loop Analysis</h1>
        </div>

        <div className="navbar-actions">
          <Link href="/team" className="btn btn-outline">
            Team
          </Link>
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </header>
  )
}
