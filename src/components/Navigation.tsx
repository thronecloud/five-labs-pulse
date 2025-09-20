import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/team", label: "Team" },
    { path: "/services", label: "Services" },
    { path: "/insights", label: "Insights" },
  ];

  return (
    <nav className="flex gap-1 mb-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`retro-button ${
            location.pathname === item.path 
              ? "bg-muted" 
              : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;