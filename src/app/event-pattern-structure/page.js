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
              <li>[Your identified event #1]</li>
              <li>[Your identified event #2]</li>
              <li>[Your identified event #3]</li>
            </ul>
          </div>

          <div className="analysis-layer amber">
            <h3>Pattern Level</h3>
            <p>Recurring trends and behaviors observed over time:</p>
            <ul>
              <li>[Your identified pattern #1]</li>
              <li>[Your identified pattern #2]</li>
              <li>[Your identified pattern #3]</li>
            </ul>
          </div>

          <div className="analysis-layer green">
            <h3>Structure Level</h3>
            <p>Deeper system structures — incentives, norms, and processes:</p>
            <ul>
              <li>[Your identified structure #1]</li>
              <li>[Your identified structure #2]</li>
              <li>[Your identified structure #3]</li>
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
              {/* Replace with your actual interventions */}
              <tr>
                <td>[Intervention 1]</td>
                <td>Event</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>[Intervention 2]</td>
                <td>Pattern</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>[Intervention 3]</td>
                <td>Structure</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="redesign-section">
          <h3>Proposed Structural Redesigns</h3>
          <div className="redesign-list">
            {/* Replace with your actual proposed redesigns */}
            <div className="redesign-item">
              <h4>Redesign 1: [Title]</h4>
              <p>[Description of your proposed structural redesign]</p>
            </div>
            <div className="redesign-item">
              <h4>Redesign 2: [Title]</h4>
              <p>[Description of your proposed structural redesign]</p>
            </div>
            <div className="redesign-item">
              <h4>Redesign 3: [Title]</h4>
              <p>[Description of your proposed structural redesign]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
