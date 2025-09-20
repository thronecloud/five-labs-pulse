import Navigation from "@/components/Navigation";
import RetroWindow from "@/components/RetroWindow";
import RetroTaskbar from "@/components/RetroTaskbar";
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
        <Navigation />
        
        <div className="retro-toolbar mb-6">
          <img src={folderIcon} alt="Services" className="retro-icon w-4 h-4" />
          <span className="text-xs font-bold ml-2">Services Directory - 4 categories available</span>
        </div>
        
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
                <div className="flex justify-end">
                  <button className="retro-button text-xs">More Info...</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="retro-toolbar mt-6">
            <span className="text-xs font-bold">Services Loaded: {services.length} categories available</span>
          </div>
        </RetroWindow>

        <RetroWindow title="Engagement Models">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="retro-dialog p-3 text-center">
                <div className="w-8 h-8 bg-retro-green rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <h4 className="font-bold text-xs mb-2">Project Advisory</h4>
                <p className="text-xs">Strategic guidance for blockchain projects and protocols</p>
              </div>
              <div className="retro-dialog p-3 text-center">
                <div className="w-8 h-8 bg-retro-purple rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">I</span>
                </div>
                <h4 className="font-bold text-xs mb-2">Infrastructure Services</h4>
                <p className="text-xs">Technical implementation and system development</p>
              </div>
              <div className="retro-dialog p-3 text-center">
                <div className="w-8 h-8 bg-retro-blue rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <h4 className="font-bold text-xs mb-2">Trading Solutions</h4>
                <p className="text-xs">Market analysis and quantitative trading support</p>
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>
      
      <RetroTaskbar />
    </div>
  );
};

export default Services;