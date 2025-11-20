import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCalculator, FaShapes, FaGlobeAmericas } from "react-icons/fa";

interface SidebarItem {
  label: string;
  route: string;
  icon?: React.ReactNode;
}

const mainItems: SidebarItem[] = [
  { label: "Inicio", route: "/", icon: <FaHome /> },
  { label: "Matemáticas", route: "/matematicas", icon: <FaCalculator /> },
  { label: "Ciencias Naturales", route: "/ciencias", icon: <FaShapes /> },
  { label: "Sociales", route: "/sociales", icon: <FaGlobeAmericas /> },
];

export default function Sidebar() {
  const [openMain, setOpenMain] = useState(true); // Abierto por defecto

  const renderNavItem = ({ label, route, icon }: SidebarItem) => (
    <NavLink
      key={route}
      to={route}
      className={({ isActive }) =>
        `w-full text-left flex items-center gap-2 justify-between rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 
         hover:bg-slate-50 dark:hover:bg-slate-800 
         ${isActive ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300" : ""}`
      }
    >
      <div className="flex items-center gap-2">{icon} {label}</div>
    </NavLink>
  );

  return (
    <aside className="hidden md:block w-full md:w-[260px] border-r border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="p-3 space-y-1">

        {/* Menú Principal Simplificado */}
        <button
          onClick={() => setOpenMain(!openMain)}
          className="w-full text-left flex items-center justify-between rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 
                     hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
        >
          Menú Educativo
          <span>{openMain ? "▲" : "▼"}</span>
        </button>
        {openMain && (
          <div className="pl-4 space-y-2">
            {mainItems.map((item, idx) => (
              <div key={item.route} className={"rounded-xl p-1 " + (idx === 0 ? "bg-gradient-to-r from-cyan-500/30 to-sky-500/10" : idx === 1 ? "bg-gradient-to-r from-emerald-500/30 to-green-500/10" : idx === 2 ? "bg-gradient-to-r from-violet-500/30 to-fuchsia-500/10" : "bg-gradient-to-r from-amber-500/30 to-orange-500/10") }>
                {renderNavItem(item)}
              </div>
            ))}
          </div>
        )}

      </div>
    </aside>
  );
}
