import Navigation from "@/components/Navigation";
import RetroWindow from "@/components/RetroWindow";
import { Button } from "@/components/ui/button";
import hardDriveIcon from "@/assets/hard-drive-icon.png";
import fiveLabsLogo from "@/assets/fivelabs-logo.png";
import blockchainMonitor from "@/assets/blockchain-monitor.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* About Section */}
          <RetroWindow title="About" className="min-h-[300px]">
            <div className="text-center space-y-4">
              <img 
                src={hardDriveIcon} 
                alt="Infrastructure icon" 
                className="mx-auto w-16 h-16"
              />
              <p className="text-sm leading-relaxed">
                FiveLabs is a blockchain trading insights, infrastructure provider, media creation, and growth advisory company serving the crypto ecosystem globally.
              </p>
            </div>
          </RetroWindow>

          {/* Logo Area */}
          <RetroWindow title="Company">
            <div className="text-center space-y-4">
              <img 
                src={fiveLabsLogo} 
                alt="FiveLabs Logo" 
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </RetroWindow>
        </div>

        {/* Extended About */}
        <RetroWindow title="Extended About" className="mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="space-y-2">
                <h3 className="font-bold">Our Services</h3>
                <p className="text-sm leading-relaxed">
                  Blockchain infrastructure will define the next wave of financial technology development and adoption. We partner with innovative projects and traders to navigate and architect the future digital landscape.
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bold">What We Do</h3>
              <p className="text-sm leading-relaxed">
                FiveLabs provides comprehensive blockchain solutions from early-stage advisory to enterprise infrastructure. We help our clients succeed by combining deep technical expertise with market insights and growth strategies.
              </p>
            </div>

            <div className="flex justify-center my-6">
              <img 
                src={blockchainMonitor} 
                alt="Blockchain Infrastructure" 
                className="w-32 h-32"
              />
            </div>

            <p className="text-sm leading-relaxed">
              Decentralization provides an opportunity for users and creators to become self-sovereign and challenge the centralizing forces that have dominated financial and technology development. However, blockchain networks must be architected with core principles: immutability, trust minimization, censorship resistance, robust economic policy, and utility that drives sustainable business models. We partner with forward-thinking clients embracing these principles as they build systems to architect the future digital landscape.
            </p>

            <p className="text-sm leading-relaxed">
              FiveLabs offers trading insights, infrastructure solutions, media creation, and growth advisory services. We work with projects at all stages, from emerging protocols to established enterprises. Our expertise spans technical implementation, market analysis, and strategic positioning. Our inbox and social channels are always open.
            </p>
          </div>
        </RetroWindow>

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2">
            <Button className="retro-button">Subscribe</Button>
            <Button className="retro-button">Twitter</Button>
            <Button className="retro-button">Contact</Button>
          </div>
          <p className="text-xs text-muted-foreground">© FiveLabs LLC, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
