import SectionHeader from "../../components/SectionHeader"

export default function EventPatternStructure() {
  return (
    <div className="container">
      <SectionHeader
        title="Event → Pattern → Structure Analysis"
        description="Deeper analysis of system dynamics at multiple levels"
      />

      <div className="card">
        <h2>Layered Analysis</h2>

        <div className="analysis-layers">
          <div className="analysis-layer red">
            <h3>Event Level</h3>
            <p>Major symptoms and surface issues observed in the education system:</p>
            <ul>
              <li>Increased availability of digital devices and internet connectivity in schools.</li>
              <li>Persistent underperformance in learning assessments like ASER and PISA.</li>
              <li>Widening educational inequities between urban and rural schools, with rural students facing challenges in using digital tools effectively.</li>
            </ul>
          </div>

          <div className="analysis-layer amber">
            <h3>Pattern Level</h3>
            <p>Recurring trends and behaviors observed over time:</p>
            <ul>
              <li>Little improvement in critical skills like reading comprehension or mathematical proficiency despite widespread digital tool deployment.</li>
              <li>Low digital literacy among teachers, especially in rural areas, leading to inconsistent technology integration in classrooms.</li>
              <li>High dropout rates among marginalized communities, exacerbating socio-economic and educational inequities.</li>
            </ul>
          </div>

          <div className="analysis-layer green">
            <h3>Structure Level</h3>
            <p>Deeper system structures — incentives, norms, and processes:</p>
            <ul>
              <li>Incentives are often misaligned with actual learning outcomes, focusing on quantitative measures like the number of devices distributed.</li>
              <li>Access to digital tools remains inequitable, with socio-economic divides acting as significant barriers.</li>
              <li>Resistance to adopting technology-driven pedagogies due to entrenched traditional teaching methods and cultural norms.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Intervention Analysis</h2>

        <div className="intervention-section">
          <h3>Existing Interventions</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Intervention</th>
                <th>Level Addressed</th>
                <th>Effectiveness</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Distribution of Tablets</td>
                <td>Event</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Teacher Training Programs</td>
                <td>Pattern</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Infrastructure Investment in Rural Areas</td>
                <td>Structure</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="redesign-section">
          <h3>Proposed Structural Redesigns</h3>
          <div className="redesign-list">
            <div className="redesign-item">
              <h4>Redesign 1: Teacher Empowerment</h4>
              <p>Establish sustained and comprehensive digital literacy training for teachers to ensure effective integration of technology in pedagogy.</p>
            </div>
            <div className="redesign-item">
              <h4>Redesign 2: Localised Content Development</h4>
              <p>Create culturally relevant and linguistically diverse digital content tailored to regional and community-specific needs.</p>
            </div>
            <div className="redesign-item">
              <h4>Redesign 3: Infrastructure Investment</h4>
              <p>Develop reliable infrastructure, including uninterrupted power supply and robust internet connectivity, particularly in rural and underserved areas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
