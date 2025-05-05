import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Education Feedback Loop Analysis",
  description: "A comprehensive analysis of feedback loops in education",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <main className="content-area">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
