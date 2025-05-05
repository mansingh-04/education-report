import SectionHeader from "../../components/SectionHeader"

export default function SystemArchetypes() {
  // Example archetypes - replace with your actual identified archetypes
  const archetypes = [
    {
      name: "Fixes that Fail",
      description:
        "Short-term solutions that create unintended consequences, making the original problem worse in the long run.",
      example:
        "Standardized testing to improve accountability that leads to teaching to the test and reduced learning quality.",
      impact: "Creates cycles of policy interventions that address symptoms rather than root causes.",
    },
    {
      name: "Shifting the Burden",
      description: "Reliance on symptomatic solutions rather than addressing fundamental issues.",
      example:
        "Using private tutoring to compensate for classroom teaching deficiencies instead of improving school instruction.",
      impact: "Weakens the system's ability to solve problems independently over time.",
    },
    {
      name: "Success to the Successful",
      description: "Resources flow to already successful elements of the system, creating growing inequality.",
      example:
        "Top-performing schools receive more funding and resources, while struggling schools fall further behind.",
      impact: "Perpetuates and amplifies educational inequality across regions and demographics.",
    },
  ]

  return (
    <div className="container">
      <SectionHeader title="System Archetypes" description="Recurring patterns identified in the education system" />

      <div className="card">
        <h2>Identified Archetypes</h2>

        <div className="archetype-list">
          {archetypes.map((archetype, index) => (
            <div key={index} className="archetype-item">
              <h3>{archetype.name}</h3>
              <div className="archetype-details">
                <div>
                  <h4>Description</h4>
                  <p>{archetype.description}</p>
                </div>
                <div>
                  <h4>Example in Education</h4>
                  <p>{archetype.example}</p>
                </div>
                <div>
                  <h4>System Impact</h4>
                  <p>{archetype.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="highlight-box purple">
          <h3>Archetype Interactions</h3>
          <p>[Explanation of how these archetypes interact with each other in the education system]</p>
        </div>
      </div>
    </div>
  )
}
