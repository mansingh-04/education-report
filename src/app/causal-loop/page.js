import SectionHeader from "../../components/SectionHeader"

export default function CausalLoop() {
  const variables = [
    { name: "Access to Digital Devices", definition: "Availability of smartphones, tablets, or computers to students at home or school." },
    { name: "Internet Connectivity", definition: "Quality, speed, and consistency of internet access for online learning." },
    { name: "Student Engagement", definition: "The level of attention, interest, and active participation a student shows in learning activities." },
    { name: "Learning Outcomes", definition: "Improvements in academic performance, such as literacy, numeracy, and conceptual understanding." },
    { name: "Teacher Digital Preparedness", definition: "The extent to which teachers are trained and confident in using digital tools for teaching." },
    { name: "Parental Support", definition: "The involvement of parents or guardians in facilitating and supervising children's learning, especially online." },
    { name: "Content Relevance", definition: "How well the digital educational content matches the local curriculum, language, and student context." },
    { name: "Screen Time Quality", definition: "The amount of time spent on educational versus non-educational activities on digital devices." },
    { name: "Motivation to Learn", definition: "Internal drive or enthusiasm of students to participate and persist in learning." },
    { name: "Digital Literacy", definition: "The ability of students and teachers to effectively use digital tools for learning purposes." },
    { name: "Distraction from Devices", definition: "The extent to which students get sidetracked by non-learning activities (e.g., games, social media)." },
    { name: "Language Accessibility", definition: "Whether digital content is available in the local language(s) understood by students." },
    { name: "Platform Feedback Mechanism", definition: "The ability of learning platforms to provide real-time feedback and adapt content based on learner progress." },
    { name: "Household Learning Environment", definition: "The overall supportiveness of the home setting for digital learning, including space, quiet, and supervision." },
    { name: "Policy and Institutional Support", definition: "Government or school-level policies that enable effective integration of digital tools in education." },
  ]

  return (
    <div className="container">
      <SectionHeader
        title="Causal Loop Diagram (CLD)"
        description="Visualization and explanation of system variables and their relationships"
      />

      <div className="card">
        <h2>System Visualization</h2>

        <div className="diagram-container">
          <img 
            src="/CLD.png" 
            alt="Causal Loop Diagram showing relationships between education system variables"
            className="causal-loop-diagram"
            style={{
              width: '100%',
              maxWidth: '1200px',
              height: 'auto',
              borderRadius: 'var(--border-radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}
          />
        </div>

        <h2>Variables and Definitions</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Variable</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              {variables.map((variable, index) => (
                <tr key={index}>
                  <td>{variable.name}</td>
                  <td>{variable.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Key Feedback Loops</h2>
        <p>[Description of the most significant feedback loops identified in your analysis]</p>

        <div className="feedback-loop blue">
          <h3>Reinforcing Loop: Teacher Digital Preparedness → Student Engagement → Learning Outcomes</h3>
          <p>[Explanation of how this reinforcing loop improves learning outcomes through better teacher integration of EdTech]</p>
        </div>

        <div className="feedback-loop green">
          <h3>Balancing Loop: Screen Time Quality → Distraction from Devices → Learning Outcomes</h3>
          <p>[Explanation of how excessive or poor-quality screen time negatively impacts outcomes, requiring balance]</p>
        </div>
      </div>
    </div>
  )
}
