import SectionHeader from "../../components/SectionHeader"
import Image from "next/image"

export default function DataTrends() {
  return (
    <div className="container">
      <SectionHeader
        title="Data Trends"
        description="Analysis of key trends and patterns in education data"
      />

      <div className="card">
        <h2>Learning Outcomes Over Time</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder no-border">
            <Image
              src="/LearningAcheivement.png"
              alt="Learning Outcomes Trend"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Time Spent on Mobile Devices before and after the pandemic</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder no-border">
            <Image
              src="/TimeSpent.jpg"
              alt="Digital Access Trend"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Screen Duration VS Age</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder no-border">
            <Image
              src="/ScreenVSAge.webp"
              alt="Screen Duration VS Age"
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