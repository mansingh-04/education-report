"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Network, Target, Repeat, BarChart3, Lightbulb, Users } from "lucide-react"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Introduction", href: "/introduction", icon: FileText },
    { name: "Process", href: "/process", icon: FileText },
    { name: "Causal Loop", href: "/causal-loop", icon: Network },
    { name: "Leverage Points", href: "/leverage-points", icon: Target },
    { name: "System Archetypes", href: "/archetypes", icon: Repeat },
    { name: "Event-Pattern-Structure", href: "/event-pattern-structure", icon: BarChart3 },
    { name: "Additional Insights", href: "/insights", icon: Lightbulb },
    { name: "Team", href: "/team", icon: Users },
  ]

  return (
    <aside className={`sidebar ${styles["creative-sidebar"]}`}>
      <div className={styles["creative-sidebar-header"]}>
        <Link href="/" className={styles["creative-sidebar-logo"]}>
          <Network className={styles["creative-logo-icon"]} />
          <span className={styles["logo-text"]}>Education Analysis</span>
        </Link>
      </div>
      <nav className={styles["creative-sidebar-nav"]}>
        <ul className={styles["creative-nav-links"]}>
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name} className={styles["creative-nav-item"]}>
                <Link
                  href={item.href}
                  className={`${styles["creative-nav-link"]}${isActive ? ` ${styles["creative-active-link"]}` : ""}`}
                >
                  <item.icon className={styles["creative-nav-icon"]} />
                  <span className={styles["creative-nav-text"]}>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
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
  )
}