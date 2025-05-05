"use client"
import SectionHeader from "../../components/SectionHeader"
import Tilt from "react-parallax-tilt"

export default function TeamMembers() {
  // Replace with your actual team members
  const teamMembers = [
    {
      name: "Team Member 1",
      enrollmentNumber: "ENROLLMENT123",
      role: "Team Lead",
      bio: "Brief description about team member 1's contribution to the project.",
    },
    {
      name: "Team Member 2",
      enrollmentNumber: "ENROLLMENT456",
      role: "Research Analyst",
      bio: "Brief description about team member 2's contribution to the project.",
    },
    {
      name: "Team Member 3",
      enrollmentNumber: "ENROLLMENT789",
      role: "Systems Modeler",
      bio: "Brief description about team member 3's contribution to the project.",
    },
    {
      name: "Team Member 4",
      enrollmentNumber: "ENROLLMENT101",
      role: "Data Analyst",
      bio: "Brief description about team member 4's contribution to the project.",
    },
    {
      name: "Team Member 5",
      enrollmentNumber: "ENROLLMENT202",
      role: "Documentation Specialist",
      bio: "Brief description about team member 5's contribution to the project.",
    },
  ]

  return (
    <div className="container">
      <SectionHeader title="Our Team" description="The people behind this research and analysis" />

      <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#fff" glarePosition="all" scale={1.04} transitionSpeed={1200}>
        <div className="card">
          <h2>Team Name</h2>
          <p>[Your Team Name]</p>

          <h2>Problem Domain</h2>
          <p>[Your Problem Domain]</p>
        </div>
      </Tilt>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <Tilt key={index} glareEnable={true} glareMaxOpacity={0.15} glareColor="#fff" glarePosition="all" scale={1.04} transitionSpeed={1200}>
            <div className="team-member">
              <div className="member-avatar">
                {/* Replace with actual team member photos if available */}
                <div className="avatar-placeholder">{member.name.charAt(0)}</div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="enrollment">Enrollment: {member.enrollmentNumber}</p>
                <p className="role">Role: {member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#fff" glarePosition="all" scale={1.04} transitionSpeed={1200}>
        <div className="card">
          <h2>References</h2>
          <p>List of all the data sources, reports, articles, tools, or APIs consulted during our research:</p>

          <ol className="references-list">
            <li>[Your reference #1]</li>
            <li>[Your reference #2]</li>
            <li>[Your reference #3]</li>
            <li>[Your reference #4]</li>
            <li>[Your reference #5]</li>
          </ol>
        </div>
      </Tilt>
    </div>
  )
}
