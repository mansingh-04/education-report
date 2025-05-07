"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  FileText, 
  Network, 
  Target, 
  Repeat, 
  BarChart3, 
  Lightbulb, 
  Users,
  PieChart,
  LineChart,
  BarChart2,
  BookOpen,
  GitBranch
} from "lucide-react"
import styles from "./Sidebar.module.css"
import { useState, useEffect } from "react"

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navigation = {
    main: [
      { name: "Home", href: "/", icon: Home },
      { name: "Introduction", href: "/introduction", icon: FileText },
      { name: "Process", href: "/process", icon: FileText },
    ],
    analysis: [
      { name: "Event-Pattern-Structure", href: "/event-pattern-structure", icon: BookOpen },
      { name: "Causal Loop", href: "/causal-loop", icon: GitBranch },
      { name: "Leverage Points", href: "/leverage-points", icon: Lightbulb },
    ],
    visualizations: [
      { name: "Data Trends", href: "/data-trends", icon: LineChart },
      { name: "Distribution Analysis", href: "/distribution", icon: PieChart },
      { name: "Comparative Stats", href: "/comparative", icon: BarChart2 },
      { name: "System Diagrams", href: "/system-diagrams", icon: Network },
    ],
    other: [
      { name: "References", href: "/insights", icon: Lightbulb },
      { name: "Team", href: "/team", icon: Users },
    ]
  }

  const renderNavSection = (items, sectionTitle) => (
    <div className={styles["nav-section"]}>
      {sectionTitle && <div className={styles["nav-section-title"]}>{sectionTitle}</div>}
      <ul className={styles["creative-nav-links"]}>
        {items.map((item) => {
          const isActive = pathname === item.href
          return (
            <li key={item.name} className={styles["creative-nav-item"]}>
              <Link
                href={item.href}
                className={`${styles["creative-nav-link"]}${isActive ? ` ${styles["creative-active-link"]}` : ""}`}
                onClick={() => isMobile && onClose()}
              >
                <item.icon className={styles["creative-nav-icon"]} />
                <span className={styles["creative-nav-text"]}>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <>
      {isMobile && isOpen && (
        <div 
          className={styles["sidebar-overlay"]} 
          onClick={onClose}
        />
      )}
      <aside className={`sidebar ${styles["creative-sidebar"]} ${isMobile ? styles["mobile-sidebar"] : ""} ${isOpen ? styles["sidebar-open"] : ""}`}>
        <div className={styles["creative-sidebar-header"]}>
          <Link href="/" className={styles["creative-sidebar-logo"]}>
            <Network className={styles["creative-logo-icon"]} />
            <span className={styles["logo-text"]}>Education Analysis</span>
          </Link>
        </div>
        <nav className={styles["creative-sidebar-nav"]}>
          {renderNavSection(navigation.main, "Main")}
          {renderNavSection(navigation.analysis, "Analysis")}
          {renderNavSection(navigation.visualizations, "Visualizations")}
          {renderNavSection(navigation.other, "Other")}
        </nav>
        <footer className={styles["creative-sidebar-footer"]}>
          <div className={styles["creative-footer-content"]}>
            <div>
              <div className={styles["creative-footer-title"]}>Education Feedback Loop</div>
              <div className={styles["creative-footer-subtitle"]}>Analysis Project</div>
            </div>
          </div>
        </footer>
      </aside>
    </>
  )
}