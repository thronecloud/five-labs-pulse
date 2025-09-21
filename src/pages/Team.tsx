import RetroWindow from "@/components/RetroWindow";
import RetroTaskbar from "@/components/RetroTaskbar";
import { Button } from "@/components/ui/button";
import folderIcon from "@/assets/folder-icon.png";
import myComputerIcon from "@/assets/my-computer-icon.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former blockchain engineer at major DeFi protocols. 8+ years in crypto infrastructure and trading systems."
    },
    {
      name: "Sarah Martinez",
      role: "Head of Trading Insights",
      bio: "Quantitative analyst with deep expertise in crypto markets and algorithmic trading strategies."
    },
    {
      name: "David Kim",
      role: "Infrastructure Lead", 
      bio: "Systems architect specializing in blockchain infrastructure and scalable trading platforms."
    },
    {
      name: "Maya Patel",
      role: "Growth Advisory Director",
      bio: "Former venture capital partner focused on crypto projects and go-to-market strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8 pb-16">
      <div className="max-w-4xl mx-auto">
        
        <RetroWindow title="Team" className="mb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <img src={folderIcon} alt="Team Folder" className="retro-icon w-6 h-6" />
              <p className="text-sm leading-relaxed">
                Our team combines deep technical expertise with market intelligence and strategic thinking. 
                We bring together professionals from blockchain development, quantitative trading, and growth advisory.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="retro-dialog p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={myComputerIcon} alt="Profile" className="retro-icon w-4 h-4" />
                    <h3 className="font-bold text-sm">{member.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-xs leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
            
            <div className="retro-toolbar mt-6">
              <span className="text-xs font-bold">Team Directory: 4 members loaded</span>
            </div>
          </div>
        </RetroWindow>

        <RetroWindow title="Advisory Network">
          <div className="flex items-start gap-4">
            <div className="retro-dialog p-3 flex-shrink-0">
              <div className="w-8 h-8 bg-retro-blue rounded-full flex items-center justify-center text-xs text-white font-bold">
                ?
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              FiveLabs maintains an extensive network of advisors including former executives from major exchanges, 
              DeFi protocol founders, institutional trading professionals, and regulatory experts. This network enables 
              us to provide comprehensive guidance across all aspects of the blockchain ecosystem.
            </p>
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

export default Team;