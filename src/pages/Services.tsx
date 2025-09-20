import Navigation from "@/components/Navigation";
import RetroWindow from "@/components/RetroWindow";

const Services = () => {
  const services = [
    {
      title: "Trading Insights",
      description: "Advanced market analysis, quantitative research, and trading strategy development for crypto markets.",
      features: ["Market Intelligence", "Risk Management", "Algorithmic Strategies", "Performance Analytics"]
    },
    {
      title: "Infrastructure Solutions", 
      description: "Blockchain infrastructure design, implementation, and optimization for trading and DeFi applications.",
      features: ["System Architecture", "Node Operations", "API Development", "Security Audits"]
    },
    {
      title: "Media Creation",
      description: "Content strategy and creation for blockchain projects, including technical documentation and marketing materials.",
      features: ["Technical Writing", "Video Content", "Brand Strategy", "Community Content"]
    },
    {
      title: "Growth Advisory",
      description: "Strategic consulting for blockchain projects from concept to scale, including fundraising and partnerships.",
      features: ["Go-to-Market", "Fundraising Strategy", "Partnership Development", "Token Economics"]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        
        <RetroWindow title="Our Services" className="mb-8">
          <p className="text-sm leading-relaxed mb-6">
            FiveLabs provides comprehensive blockchain solutions across four core service areas. 
            We work with projects at all stages, from emerging protocols to established enterprises.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-secondary p-4 border border-border space-y-3">
                <h3 className="font-bold text-sm">{service.title}</h3>
                <p className="text-xs leading-relaxed">{service.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">Key Features:</p>
                  <ul className="text-xs space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-foreground"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </RetroWindow>

        <RetroWindow title="Engagement Models">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-accent p-3 border border-border text-center">
                <h4 className="font-bold text-xs mb-2">Project Advisory</h4>
                <p className="text-xs">Strategic guidance for blockchain projects and protocols</p>
              </div>
              <div className="bg-accent p-3 border border-border text-center">
                <h4 className="font-bold text-xs mb-2">Infrastructure Services</h4>
                <p className="text-xs">Technical implementation and system development</p>
              </div>
              <div className="bg-accent p-3 border border-border text-center">
                <h4 className="font-bold text-xs mb-2">Trading Solutions</h4>
                <p className="text-xs">Market analysis and quantitative trading support</p>
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};

export default Services;