import SectionHeader from "../../components/SectionHeader"

export default function SystemArchetypes() {
  const archetypes = [
    {
      name: "Shifting the Burden",
      description:
        "This archetype reveals a reliance on short-term, surface-level solutions to address complex, deep-rooted problems.",
      example:
        "Distributing digital devices and internet connectivity to address education challenges, without addressing underlying issues like teacher training or curriculum alignment.",
      impact:
        "Diverts attention and resources away from systemic reforms, making the system dependent on technology as a quick fix, while long-term issues persist.",
    },
    {
      name: "Limits to Success",
      description:
        "Initial digital interventions show promise, but systemic constraints eventually hinder sustained progress.",
      example:
        "Improved digital engagement initially seen in schools, but progress stalls due to limited digital literacy, poor infrastructure, and lack of contextual content.",
      impact:
        "Further investment yields diminishing returns, leading to stakeholder frustration and weakening support for digital learning over time.",
    },
  ]

  return (
    <div className="container">
      <SectionHeader
        title="System Archetypes"
        description="Recurring patterns identified in the education system"
      />

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
          <p>
            These archetypes reinforce each other: the “Shifting the Burden” dynamic weakens the system’s resilience,
            while “Limits to Success” discourages continued innovation and stakeholder trust. Together, they
            demonstrate why surface-level digital interventions alone cannot produce sustainable change without
            addressing structural barriers in the education system.
          </p>
        </div>
      </div>
    </div>
  )
}
