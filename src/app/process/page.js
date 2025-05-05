import SectionHeader from "../../components/SectionHeader"
import { CheckCircle } from "lucide-react"

export default function Process() {
  // Example process steps - replace with your actual process
  const processSteps = [
    "Identified the problem domain in education",
    "Conducted literature review on existing research",
    "Interviewed stakeholders including teachers, students and administrators",
    "Collected and analyzed relevant data",
    "Created initial causal loop diagrams",
    "Refined models based on feedback",
    "Identified key leverage points",
    "Analyzed system archetypes",
    "Conducted Event-Pattern-Structure analysis",
    "Compiled findings and recommendations",
  ]

  return (
    <div className="container">
      <SectionHeader title="Process Followed" description="Step-by-step methodology used in our analysis" />

      <div className="card">
        <h2>Our Approach</h2>

        <div className="process-list">
          {processSteps.map((step, index) => (
            <div key={index} className="process-item">
              <CheckCircle className="check-icon" />
              <div>
                <p>{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
