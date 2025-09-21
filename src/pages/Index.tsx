import RetroWindow from "@/components/RetroWindow";
import RetroTaskbar from "@/components/RetroTaskbar";
import { Button } from "@/components/ui/button";
import clippyIcon from "@/assets/clippy-icon.png";
import myComputerIcon from "@/assets/my-computer-icon.png";
import folderIcon from "@/assets/folder-icon.png";
import fiveLabsLogo from "@/assets/fivelabs-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8 pb-16 flex flex-col">
      <div className="max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* About Section */}
          <RetroWindow title="About" className="min-h-[300px] flex flex-col">
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <img src={myComputerIcon} alt="Computer" className="retro-icon w-6 h-6" />
                <h3 className="font-bold text-sm">System Information</h3>
              </div>
              <p className="text-sm leading-relaxed">
                FiveLabs is a blockchain trading insights, infrastructure provider, media creation, and growth advisory company serving the crypto ecosystem globally.
              </p>
              
              <div className="retro-dialog p-3 mt-4">
                <div className="flex items-center gap-2">
                  <img src={clippyIcon} alt="Clippy" className="retro-icon w-8 h-8" />
                  <div className="text-xs">
                    <p className="font-bold">Clippy says:</p>
                    <p>"It looks like you're exploring blockchain services. Would you like help?"</p>
                  </div>
                </div>
              </div>
            </div>
          </RetroWindow>

          {/* Logo Area */}
          <RetroWindow title="Company" className="min-h-[300px] flex flex-col">
            <div className="text-center space-y-4 flex-1 flex flex-col justify-center">
              <img 
                src={fiveLabsLogo} 
                alt="FiveLabs Logo" 
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </RetroWindow>
        </div>

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

export default Index;