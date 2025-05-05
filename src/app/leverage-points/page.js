import SectionHeader from "../../components/SectionHeader"

export default function LeveragePoints() {
  // Example leverage points - replace with your actual leverage points
  const leveragePoints = [
    {
      point: "Teacher Training Programs",
      category: "Information Flows (#6)",
      importance: "Enhances teaching quality and pedagogical approaches",
      impact: "Improves student learning outcomes and engagement",
    },
    {
      point: "Community Involvement Initiatives",
      category: "Self-Organization (#4)",
      importance: "Creates local ownership of educational outcomes",
      impact: "Sustainable improvement in school performance and resource allocation",
    },
    {
      point: "Educational Technology Integration",
      category: "Rules of the System (#5)",
      importance: "Modernizes teaching methods and expands access",
      impact: "Reduces educational inequality and improves learning flexibility",
    },
    {
      point: "Curriculum Redesign",
      category: "Goals of the System (#3)",
      importance: "Aligns education with contemporary needs and values",
      impact: "Better preparation of students for future challenges",
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
            <li>[Your highest impact leverage point #1]</li>
            <li>[Your highest impact leverage point #2]</li>
            <li>[Your highest impact leverage point #3]</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
