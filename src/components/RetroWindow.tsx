interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const RetroWindow = ({ title, children, className = "" }: RetroWindowProps) => {
  return (
    <div className={`retro-window ${className}`}>
      <div className="bg-secondary border-b border-border px-3 py-1 text-xs font-mono font-bold">
        {title}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;