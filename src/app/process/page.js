import SectionHeader from "../../components/SectionHeader"
import { CheckCircle } from "lucide-react"

export default function Process() {
  const processSteps = [
    "Defined the core problem of poor learning outcomes despite digital access",
    "Reviewed research papers and policy reports on EdTech and learning",
    "Engaged with teachers, students, and administrators for real-world insights",
    "Gathered and analyzed data on digital access and academic performance",
    "Developed initial causal loop diagrams (CLDs) to map system behavior",
    "Refined models through iterative feedback and team discussions",
    "Identified systemic leverage points using Meadows’ framework",
    "Explored system archetypes like shifting the burden and fixes that fail",
    "Performed Event-Pattern-Structure (EPS) analysis to unpack root causes",
    "Proposed targeted interventions and compiled findings into final visuals"
  ]

  return (
    <div className="container">
      <SectionHeader title="Process Followed" description="Step-by-step methodology used in our analysis" />

      <div className="card">
        <h2>Our Approach</h2>
        <br></br>
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
