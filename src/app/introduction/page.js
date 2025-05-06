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
        <p>
          In recent years, India has made major advancements in digital connectivity through initiatives like Digital India, providing millions of households with smartphones and internet access. Programs such as PM eVidya, DIKSHA, and state-level platforms have aimed to deliver digital educational content to school children. The COVID-19 pandemic further accelerated this transition to online learning, making digital tools a primary mode of education for many students.
          <br /><br />
          However, despite improved access to digital infrastructure, learning outcomes have not shown a corresponding rise. Surveys such as ASER (Annual Status of Education Report) and NAS (National Achievement Survey) reveal that students continue to struggle with foundational skills like reading comprehension, basic mathematics, and conceptual clarity. This signals a critical gap between access to education technology and actual learning gains.
        </p>

        <h2>Importance in Indian Context</h2>
        <p>
          India has the largest population of school-going children globally—over 250 million. The quality of education they receive will directly influence the nation’s social equity, economic productivity, and long-term development.
          <br /><br />
          This issue is particularly significant in India because:
          <br /><br />
          - <strong>Widening Education Inequality</strong>: Rural-urban divides and disparities across gender, caste, and income threaten to make digital interventions more exclusionary than inclusive.
          <br />
          - <strong>Underutilization of Investments</strong>: Significant government and private investments in digital learning are not translating into better learning, indicating inefficiencies and missed opportunities.
          <br />
          - <strong>Lack of Teacher Readiness</strong>: Many educators lack the training to effectively integrate digital tools, and much digital content fails to reflect local languages, contexts, or curricula.
          <br />
          - <strong>Economic Implications</strong>: Poor learning outcomes today lead to an under-skilled workforce tomorrow, undermining India's demographic advantage.
          <br />
          - <strong>Policy Shortcomings</strong>: Most policies have focused on infrastructure provision (devices and internet), neglecting pedagogy, curriculum integration, learner engagement, and systemic feedback mechanisms.
        </p>

        <div className="highlight-box blue">
          <h3>Problem Statement</h3>
          <p>
            Despite increased access to digital devices and the internet in India’s education system, learning outcomes for school children have not improved. This reveals a systemic issue where infrastructure gains are not translating into meaningful educational progress, particularly in foundational literacy and numeracy skills.
          </p>
        </div>
      </div>
    </div>
  )
}
