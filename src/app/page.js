"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Education Feedback Loop Analysis</h1>
        <p className="subtitle">
          A comprehensive analysis of systemic issues in education and potential leverage points for intervention
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h2>Introduction to the Problem</h2>
          <p>
            Our analysis explores critical feedback loops within the education system, identifying key leverage points
            and systemic structures that perpetuate challenges in this domain.
          </p>
          <Link href="/introduction" className="link-with-icon">
            Read more <ArrowRight className="icon" />
          </Link>
        </div>

        <div className="card">
          <h2>Our Approach</h2>
          <p>
            We followed a structured systems thinking methodology to analyze the problem, create causal loop diagrams,
            and identify effective intervention points.
          </p>
          <Link href="/process" className="link-with-icon">
            View process <ArrowRight className="icon" />
          </Link>
        </div>
      </div>

      <div className="section-card">
        <h2>Key Sections</h2>
        <div className="section-links">
          {[
            { title: "Causal Loop Diagram", href: "/causal-loop" },
            { title: "Leverage Points", href: "/leverage-points" },
            { title: "System Archetypes", href: "/archetypes" },
            { title: "Event-Pattern-Structure", href: "/event-pattern-structure" },
            { title: "Additional Insights", href: "/insights" },
            { title: "Team Members", href: "/team" },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="section-link">
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
