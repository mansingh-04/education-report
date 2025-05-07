import SectionHeader from "../../components/SectionHeader"
import { BookOpen, ExternalLink } from "lucide-react"

export default function AdditionalInsights() {
  const references = [
    {
      title: "ASER Reports (Annual Status of Education Report)",
      url: "https://asercentre.org/"
    },
    {
      title: "PISA (Programme for International Student Assessment)",
      url: "https://www.oecd.org/pisa/"
    },
    {
      title: "National Education Policy (NEP) 2020",
      url: "https://www.education.gov.in/en/national-education-policy-2020"
    },
    {
      title: "UNESCO and UNICEF reports on EdTech in developing countries",
      url: "https://www.unesco.org/en/education/digital"
    },
    {
      title: "Brookings Institution and World Bank research on the digital divide",
      url: "https://www.brookings.edu/topic/education/"
    },
    {
      title: "Systems thinking tools such as Causal Loop Diagrams (CLDs)",
      url: "https://thesystemsthinker.com/causal-loop-construction-the-basics/"
    },
    {
      title: "Modeling tools like Vensim for systemic analysis",
      url: "https://vensim.com/"
    }
  ]

  return (
    <div className="container">
      <SectionHeader
        title="References"
        description="List of all the data sources, reports, articles, tools, or APIs consulted during our research"
      />

      <div className="references-list">
        {references.map((ref, index) => (
          <a 
            key={index} 
            href={ref.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="reference-item"
          >
            <span className="reference-number">{index + 1}.</span>
            <span className="reference-title">{ref.title}</span>
            <ExternalLink className="reference-icon" />
          </a>
        ))}
      </div>
    </div>
  )
}
