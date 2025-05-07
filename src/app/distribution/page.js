import SectionHeader from "../../components/SectionHeader"
import Image from "next/image"

export default function DistributionAnalysis() {
  return (
    <div className="container">
      <SectionHeader
        title="Distribution Analysis"
        description="Analysis of data distribution across different education metrics"
      />

      <div className="card">
        <h2>Literacy Level in Rural India</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder">
            <Image
              src="/LiteracyLevel.png"
              alt="Literacy Level in Rural India"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Parent Engagement in Education</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder">
            <Image
              src="/ParentalEngament.png"
              alt="Parent Engagement in Education"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Screen Time Usage in Hours</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder">
            <Image
              src="/ScreenTimeHR.png"
              alt="Teacher Digital Literacy Distribution"
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