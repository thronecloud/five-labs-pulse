import Navigation from "@/components/Navigation";
import RetroWindow from "@/components/RetroWindow";

const Insights = () => {
  const insights = [
    {
      date: "2024-03-15",
      title: "The Evolution of DeFi Infrastructure",
      summary: "Analysis of emerging patterns in decentralized finance infrastructure and their implications for institutional adoption.",
      category: "Infrastructure"
    },
    {
      date: "2024-03-10", 
      title: "Quantitative Approaches to Crypto Market Making",
      summary: "Deep dive into algorithmic market making strategies and risk management frameworks for volatile crypto assets.",
      category: "Trading"
    },
    {
      date: "2024-03-05",
      title: "Building Sustainable Token Economics",
      summary: "Framework for designing token economics that align incentives and create long-term value for protocol participants.",
      category: "Strategy"
    },
    {
      date: "2024-02-28",
      title: "Layer 2 Scaling Solutions Comparison",
      summary: "Technical analysis of various Layer 2 solutions and their trade-offs for different use cases and applications.",
      category: "Infrastructure"
    },
    {
      date: "2024-02-20",
      title: "Institutional Crypto Adoption Trends",
      summary: "Market research on institutional cryptocurrency adoption patterns and infrastructure requirements.",
      category: "Research"
    }
  ];

  const categories = ["All", "Infrastructure", "Trading", "Strategy", "Research"];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        
        <RetroWindow title="Market Insights" className="mb-8">
          <div className="space-y-4">
            <p className="text-sm leading-relaxed">
              Our research and analysis on blockchain technology, market trends, and trading strategies. 
              Insights are based on quantitative analysis, technical research, and market intelligence.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="retro-button text-xs"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="bg-secondary p-4 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-sm">{insight.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-accent px-2 py-1 border border-border">
                        {insight.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{insight.date}</span>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed">{insight.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </RetroWindow>

        <RetroWindow title="Newsletter Signup">
          <div className="space-y-4">
            <p className="text-sm leading-relaxed">
              Subscribe to receive our weekly insights on blockchain technology, market analysis, and trading strategies.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-input border border-border px-3 py-1 text-xs font-mono"
              />
              <button className="retro-button">Subscribe</button>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};

export default Insights;