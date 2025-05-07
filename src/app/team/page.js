"use client"
import SectionHeader from "../../components/SectionHeader"

export default function TeamMembers() {
  const teamMembers = [
    {
      name: "Ipshita Anand",
      enrollmentNumber: "2402110012",
      role: "Team Lead",
      bio: "Led coordination and strategic direction of the project, ensured timely progress, and consolidated the final report.",
    },
    {
      name: "Kulpreet Kaur",
      enrollmentNumber: "2404310009",
      role: "Concept Designer & Report Contributor",
      bio: "Drafted the initial versions of the Causal Loop and Stock & Flow Diagrams on paper, and contributed significantly to compiling and structuring the team report.",
    },
    {
      name: "Manpreet Singh",
      enrollmentNumber: "2401010263",
      role: "Web Developer",
      bio: "Designed and built the official project website, ensuring effective presentation of research, visuals, and interactivity.",
    },
    {
      name: "Hardik Hathwal",
      enrollmentNumber: "2401010176",
      role: "Data Analyst",
      bio: "Analyzed datasets from ASER, PISA, and UNESCO reports to extract meaningful trends and correlations.",
    },
    {
      name: "Syed Darain Qamar",
      enrollmentNumber: "2401010472",
      role: "Systems Modeler",
      bio: "Digitally created the Causal Loop Diagram (CLD), Stock & Flow Diagram using Vensim, and developed an interactive bot to simulate dynamics.",
    },
  ]

  return (
    <div className="container">
      <SectionHeader title="Our Team" description="The people behind this research and analysis" />

        <div className="card">
          <h2>Team Name</h2>
          <p>THE LEVERAGE QUINTET</p>

          <h2>Problem Domain</h2>
          <p>Education</p>

          <h2>Problem Statement</h2>
          <p>(5.1) The Screen Time vs Learning Time Dilemma</p>
        </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <div className="team-member-content">
              <div className="member-avatar">
                <div className="avatar-placeholder">{member.name.charAt(0)}</div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="enrollment">Enrollment: {member.enrollmentNumber}</p>
                <p className="role">Role: {member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
