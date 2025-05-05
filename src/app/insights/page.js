import SectionHeader from "../../components/SectionHeader"
import { Lightbulb } from "lucide-react"

export default function AdditionalInsights() {
  // Example insights - replace with your actual insights
  const insights = [
    {
      title: "Unexpected Connections",
      description:
        "We discovered surprising relationships between teacher autonomy and student innovation that weren't initially apparent.",
    },
    {
      title: "Delayed Effects",
      description:
        "Many educational interventions show significant time delays before producing measurable outcomes, complicating evaluation.",
    },
    {
      title: "Regional Variations",
      description:
        "The same feedback loops operate differently across urban and rural educational contexts due to resource disparities.",
    },
    {
      title: "Technology Adoption Patterns",
      description:
        "Educational technology implementation follows predictable patterns that can be leveraged for more effective rollouts.",
    },
    {
      title: "Stakeholder Perception Gaps",
      description:
        "We found significant differences in how various stakeholders perceive the same educational challenges.",
    },
  ]

  return (
    <div className="container">
      <SectionHeader
        title="Additional Insights"
        description="Other interesting findings and patterns from our research"
      />

      <div className="card">
        <h2>Key Discoveries</h2>

        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-item">
              <div className="insight-icon">
                <Lightbulb className="icon-yellow" />
              </div>
              <div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="highlight-box indigo">
          <h3>Emerging Questions</h3>
          <p>Our analysis has raised several important questions for future research:</p>
          <ul>
            <li>[Your emerging question #1]</li>
            <li>[Your emerging question #2]</li>
            <li>[Your emerging question #3]</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
