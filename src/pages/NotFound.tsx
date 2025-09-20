import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import RetroWindow from "@/components/RetroWindow";
import RetroTaskbar from "@/components/RetroTaskbar";
import clippyIcon from "@/assets/clippy-icon.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background p-8 pb-16 flex items-center justify-center">
      <div className="max-w-lg mx-auto">
        <RetroWindow title="System Error - File Not Found">
          <div className="space-y-6 text-center">
            <div className="retro-dialog p-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-retro-red rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">X</span>
                </div>
                <h1 className="text-2xl font-bold font-mono">ERROR 404</h1>
              </div>
              
              <p className="text-sm mb-4">
                The requested file or directory could not be found on this server.
              </p>
              
              <div className="bg-muted p-3 border border-border text-xs font-mono text-left">
                <p>C:\&gt; dir {location.pathname}</p>
                <p>File Not Found</p>
                <p>Volume in drive C has no label</p>
                <p>Directory of C:\FiveLabs</p>
                <p>&nbsp;</p>
                <p>The system cannot find the path specified.</p>
              </div>
            </div>
            
            <div className="retro-dialog p-3 flex items-center gap-3">
              <img src={clippyIcon} alt="Clippy" className="retro-icon w-6 h-6" />
              <div className="text-left text-xs">
                <p className="font-bold mb-1">Clippy says:</p>
                <p>"It looks like you're lost! Would you like me to help you get back home?"</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-2">
              <a href="/" className="retro-button">
                Return to Home
              </a>
              <a href="/services" className="retro-button">
                View Services
              </a>
            </div>
          </div>
        </RetroWindow>
      </div>
      
      <RetroTaskbar />
    </div>
  );
};

export default NotFound;