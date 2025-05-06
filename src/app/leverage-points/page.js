import SectionHeader from "../../components/SectionHeader"

export default function LeveragePoints() {
  const leveragePoints = [
    {
      point: "Teacher Digital Training",
      category: "Rules of the System (#5)",
      importance: "Teachers are the bridge between content and learners. Training enables meaningful integration of technology, not just usage.",
      impact: "Improved student engagement, better lesson delivery, increased learning retention.",
    },
    {
      point: "Localized & Culturally Relevant Content",
      category: "Structure of Material Stocks and Flows (#10)",
      importance: "Aligns digital learning with students’ context and curriculum.",
      impact: "Higher content relevance, better academic performance, lower dropout.",
    },
    {
      point: "Parental Awareness & Engagement Programs",
      category: "Information Flows (#6)",
      importance: "Informed parents can support and supervise learning better, especially in low-literacy households.",
      impact: "Reduced screen misuse, more structured home learning time, increased motivation.",
    },
    {
      point: "Improving Platform Feedback Mechanisms",
      category: "Information Flows (#6)",
      importance: "Personalized feedback keeps learners motivated and allows teachers to adapt instruction.",
      impact: "Accelerated progress for weaker students, higher time-on-task, better content mastery.",
    },
    {
      point: "Redefining Educational Success Beyond Exams",
      category: "Paradigm Shift (#2)",
      importance: "Encourages deeper learning, creativity, and problem-solving — not just rote memorization.",
      impact: "Holistic development, improved higher-order thinking, better real-world readiness.",
    },
    {
      point: "Incentives for Digital Integration in Classrooms",
      category: "Rules of the System (#5)",
      importance: "Encourages sustainable and thoughtful use of digital tools aligned with pedagogy.",
      impact: "More innovative teaching practices, consistency in digital learning usage.",
    },
    {
      point: "Better Monitoring & Feedback at School Level",
      category: "Information Flows (#6)",
      importance: "Enables schools to identify gaps and address them quickly.",
      impact: "Timely interventions, improved accountability, adaptive system behavior.",
    },
  ]

  return (
    <div className="container">
      <SectionHeader
        title="Leverage Points Analysis"
        description="Identification of key intervention points in the system"
      />

      <div className="card">
        <h2>Identified Leverage Points</h2>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Leverage Point</th>
                <th>Donella Meadows Category</th>
                <th>Why Important</th>
                <th>Expected Impact</th>
              </tr>
            </thead>
            <tbody>
              {leveragePoints.map((point, index) => (
                <tr key={index}>
                  <td>{point.point}</td>
                  <td>{point.category}</td>
                  <td>{point.importance}</td>
                  <td>{point.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="highlight-box yellow">
          <h3>Highest Impact Leverage Points</h3>
          <p>Based on our analysis, the following leverage points offer the greatest potential for systemic change:</p>
          <ul>
            <li>Teacher Digital Training</li>
            <li>Localized & Culturally Relevant Content</li>
            <li>Redefining Educational Success Beyond Exams</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
