import SectionHeader from "../../components/SectionHeader"
import Image from "next/image"

export default function SystemDiagrams() {
  return (
    <div className="container">
      <SectionHeader
        title="System Diagrams"
        description="Key system diagrams showing the structure and dynamics of the education system"
      />

      <div className="card">
        <h2>Behavior Over Time (BOT) Graph</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder no-border">
            <Image
              src="/BOT.jpeg"
              alt="Behavior Over Time Graph"
              width={800}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Stock and Flow Diagram</h2>
        <div className="diagram-container">
          <div className="diagram-placeholder no-border">
            <Image
              src="/StockAndLow.png"
              alt="Stock and Flow Diagram"
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