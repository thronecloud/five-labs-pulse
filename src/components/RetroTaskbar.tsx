import { Link } from "react-router-dom";
import floppyDiskIcon from "@/assets/floppy-disk-icon.png";
import folderIcon from "@/assets/folder-icon.png";

const RetroTaskbar = () => {
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary border-t-2 border-border h-10 flex items-center justify-between px-2 z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="retro-start-button flex items-center gap-1">
          <div className="w-4 h-4 bg-primary rounded-sm"></div>
          <span>Home</span>
        </Link>
        
        <div className="flex gap-1">
          <Link to="/insights" className="retro-button px-2 py-1 flex items-center gap-1">
            <img src={folderIcon} alt="Insights" className="retro-icon w-4 h-4" />
            <span className="text-xs">Insights</span>
          </Link>
          
          <Link to="/services" className="retro-button px-2 py-1 flex items-center gap-1">
            <img src={floppyDiskIcon} alt="Services" className="retro-icon w-4 h-4" />
            <span className="text-xs">Services</span>
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-xs font-mono text-muted-foreground">
          📍 Network School, Singapore
        </div>
        <div className="bg-muted border border-border px-2 py-1 text-xs font-mono">
          {currentTime}
        </div>
      </div>
    </div>
  );
};

export default RetroTaskbar;