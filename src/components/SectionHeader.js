export default function SectionHeader({ title, description }) {
    return (
      <div className="section-header">
        <h1>{title}</h1>
        {description && <p className="section-description">{description}</p>}
      </div>
    )
  }
  