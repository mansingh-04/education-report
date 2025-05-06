"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar({ onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
    onMenuClick()
  }

  return (
    <header className="navbar earthy-navbar">
      <div className="navbar-container earthy-navbar-container">
        <div className="menu-toggle">
          <button onClick={handleMenuClick} className="menu-button">
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        <div className="navbar-title earthy-navbar-title">
          <h1>Education Feedback Loop Analysis</h1>
        </div>

        <div className="navbar-actions">
          <a href="/team" className="btn btn-outline">
            Team
          </a>
          <a href="/" className="btn btn-primary">
            Home
          </a>
        </div>
      </div>
    </header>
  )
}
