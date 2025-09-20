import Navigation from "@/components/Navigation";
import RetroWindow from "@/components/RetroWindow";

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
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        
        <RetroWindow title="Team" className="mb-8">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed">
              Our team combines deep technical expertise with market intelligence and strategic thinking. 
              We bring together professionals from blockchain development, quantitative trading, and growth advisory.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-secondary p-4 border border-border">
                  <h3 className="font-bold text-sm mb-1">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-xs leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </RetroWindow>

        <RetroWindow title="Advisory Network">
          <p className="text-sm leading-relaxed">
            FiveLabs maintains an extensive network of advisors including former executives from major exchanges, 
            DeFi protocol founders, institutional trading professionals, and regulatory experts. This network enables 
            us to provide comprehensive guidance across all aspects of the blockchain ecosystem.
          </p>
        </RetroWindow>
      </div>
    </div>
  );
};

export default Team;