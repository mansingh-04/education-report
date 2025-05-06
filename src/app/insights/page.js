import SectionHeader from "../../components/SectionHeader"
import { Lightbulb } from "lucide-react"

export default function AdditionalInsights() {
  const insights = [
    {
      title: "Digital Literacy Gap",
      description:
        "A significant divide exists in digital literacy between urban and rural educators and students, limiting effective technology use in rural classrooms.",
    },
    {
      title: "Parental and Community Involvement",
      description:
        "Low awareness among parents, especially in low-income households, hinders their ability to support digital learning at home.",
    },
    {
      title: "Cultural and Linguistic Barriers",
      description:
        "The dominance of English-centric digital content reduces accessibility and engagement for students in rural and tribal regions.",
    },
    {
      title: "Broader Societal Issues",
      description:
        "Factors like poverty and gender inequality limit the reach and impact of digital education, particularly for girls in rural areas.",
    },
    {
      title: "Intersection with Development Goals",
      description:
        "Digital education initiatives are deeply intertwined with broader goals like electrification, poverty reduction, and gender equity.",
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
            <li>How can digital literacy training be scaled equitably across regions?</li>
            <li>What role can local communities play in sustaining digital learning initiatives?</li>
            <li>How can educational content be better localized to improve relevance and accessibility?</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
