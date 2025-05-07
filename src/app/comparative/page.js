import SectionHeader from "../../components/SectionHeader"
import Image from "next/image"

export default function ComparativeStats() {
  return (
    <div className="container">
      <SectionHeader
        title="Comparative Statistics"
        description="Comparative analysis of education metrics across different regions and demographics"
      />

      <div className="card">
        <h2>Productive Screen Time VS Non-Productive Screen Time</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder">
            <Image
              src="/ScreenTime.png"
              alt="Urban vs Rural Performance"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Rural VS Urban (Internet Access)</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder">
            <Image
              src="/RuralVsUrban.png"
              alt="Rural VS Urban (Internet Access)"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Teacher Digital Literacy Distribution</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder">
            <Image
              src="/TeacherLiteracy.png"
              alt="Public vs Private Schools"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 