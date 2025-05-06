"use client"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-container">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <div className="main-content">
            <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <main className="content-area">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
