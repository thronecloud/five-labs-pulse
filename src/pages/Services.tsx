import RetroWindow from "@/components/RetroWindow";
import RetroTaskbar from "@/components/RetroTaskbar";
import { Button } from "@/components/ui/button";
import floppyDiskIcon from "@/assets/floppy-disk-icon.png";
import folderIcon from "@/assets/folder-icon.png";
import myComputerIcon from "@/assets/my-computer-icon.png";

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
    <div className="min-h-screen bg-background p-8 pb-16">
      <div className="max-w-4xl mx-auto">
        
        
        <RetroWindow title="Our Services" className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="retro-dialog p-2 flex-shrink-0">
              <img src={floppyDiskIcon} alt="Services Disk" className="retro-icon w-6 h-6" />
            </div>
            <p className="text-sm leading-relaxed">
              FiveLabs provides comprehensive blockchain solutions across four core service areas. 
              We work with projects at all stages, from emerging protocols to established enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="retro-dialog p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <img src={myComputerIcon} alt="Service" className="retro-icon w-4 h-4" />
                  <h3 className="font-bold text-sm">{service.title}</h3>
                </div>
                <p className="text-xs leading-relaxed">{service.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">Key Features:</p>
                  <ul className="text-xs space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-retro-blue rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
        </RetroWindow>

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2">
            <Button className="retro-button" onClick={() => window.open('https://x.com/FiveLabsXYZ', '_blank')}>Twitter</Button>
            <Button className="retro-button" onClick={() => window.open('mailto:contact@fivelabs.xyz')}>Contact</Button>
          </div>
        </div>
      </div>
      
      <RetroTaskbar />
    </div>
  );
};

export default Services;