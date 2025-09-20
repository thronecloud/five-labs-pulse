import Navigation from "@/components/Navigation";
import RetroWindow from "@/components/RetroWindow";
import RetroTaskbar from "@/components/RetroTaskbar";
import { Button } from "@/components/ui/button";
import clippyIcon from "@/assets/clippy-icon.png";
import myComputerIcon from "@/assets/my-computer-icon.png";
import floppyDiskIcon from "@/assets/floppy-disk-icon.png";
import folderIcon from "@/assets/folder-icon.png";
import fiveLabsLogo from "@/assets/fivelabs-logo.png";
import blockchainMonitor from "@/assets/blockchain-monitor.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8 pb-16">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        
        <div className="retro-toolbar mb-6">
          <img src={folderIcon} alt="Folder" className="retro-icon w-4 h-4" />
          <span className="text-xs font-bold ml-2">FiveLabs.xyz - Blockchain Infrastructure Company</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* About Section */}
          <RetroWindow title="About" className="min-h-[300px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <img src={myComputerIcon} alt="Computer" className="retro-icon w-6 h-6" />
                <h3 className="font-bold text-sm">System Information</h3>
              </div>
              <p className="text-sm leading-relaxed">
                FiveLabs is a blockchain trading insights, infrastructure provider, media creation, and growth advisory company serving the crypto ecosystem globally.
              </p>
              
              <div className="retro-dialog p-3 mt-4">
                <div className="flex items-center gap-2">
                  <img src={clippyIcon} alt="Clippy" className="retro-icon w-5 h-5" />
                  <div className="text-xs">
                    <p className="font-bold">Clippy says:</p>
                    <p>"It looks like you're exploring blockchain services. Would you like help?"</p>
                  </div>
                </div>
              </div>
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
              <div className="flex justify-center gap-2 mt-4">
                <div className="retro-button px-2 py-1 text-xs">
                  <img src={floppyDiskIcon} alt="Save" className="retro-icon w-3 h-3 inline mr-1" />
                  Save Company
                </div>
              </div>
            </div>
          </RetroWindow>
        </div>

        {/* Extended About */}
        <RetroWindow title="Extended About" className="mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img src={folderIcon} alt="Services" className="retro-icon w-4 h-4" />
                  <h3 className="font-bold">Our Services</h3>  
                </div>
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
              <div className="retro-dialog p-4">
                <img 
                  src={blockchainMonitor} 
                  alt="Blockchain Infrastructure" 
                  className="w-32 h-32 border border-border"
                />
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              Decentralization provides an opportunity for users and creators to become self-sovereign and challenge the centralizing forces that have dominated financial and technology development. However, blockchain networks must be architected with core principles: immutability, trust minimization, censorship resistance, robust economic policy, and utility that drives sustainable business models. We partner with forward-thinking clients embracing these principles as they build systems to architect the future digital landscape.
            </p>

            <p className="text-sm leading-relaxed">
              FiveLabs offers trading insights, infrastructure solutions, media creation, and growth advisory services. We work with projects at all stages, from emerging protocols to established enterprises. Our expertise spans technical implementation, market analysis, and strategic positioning. Our inbox and social channels are always open.
            </p>
            
            {/* System Status Bar */}
            <div className="retro-toolbar mt-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold">System Status:</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-retro-green rounded-full"></div>
                  <span className="text-xs">All Services Online</span>
                </div>
              </div>
            </div>
          </div>
        </RetroWindow>

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2">
            <Button className="retro-button">
              <img src={floppyDiskIcon} alt="Save" className="retro-icon w-3 h-3 inline mr-1" />
              Subscribe
            </Button>
            <Button className="retro-button">Twitter</Button>
            <Button className="retro-button">Contact</Button>
          </div>
          <p className="text-xs text-muted-foreground">© FiveLabs LLC, 2024</p>
        </div>
      </div>
      
      <RetroTaskbar />
    </div>
  );
};

export default Index;