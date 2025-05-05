import SectionHeader from "../../components/SectionHeader"

export default function Introduction() {
  return (
    <div className="container">
      <SectionHeader
        title="Introduction to the Problem"
        description="Background and context of the education system issue"
      />

      <div className="card">
        <h2>Background</h2>
        <p>[Your background information about the selected problem in education]</p>

        <h2>Importance in Indian Context</h2>
        <p>[Explanation of why this is an important/systemic issue in the Indian context]</p>

        <div className="highlight-box blue">
          <h3>Problem Statement</h3>
          <p>[Your specific problem statement]</p>
        </div>
      </div>
    </div>
  )
}
