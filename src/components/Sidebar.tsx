import { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaCalculator, FaLeaf, FaGlobeAmericas, FaCog} from "react-icons/fa";

interface SidebarItem {
  label: string;
  route: string;
  icon?: React.ReactNode;
}

interface SidebarGroup {
  label: string;
  items: SidebarItem[];
  isExpandable?: boolean;
}

const sidebarGroups: SidebarGroup[] = [
  {
    label: "Matemáticas",
    isExpandable: true,
    items: [
      { label: "Descomposición", route: "/matematicas/descomposicion", icon: <FaCog /> }
    ]
  },
  {
    label: "Ciencias Naturales",
    isExpandable: true,
    items: [
      { label: "Ciencias Naturales", route: "/ciencias-naturales", icon: <FaLeaf /> }
    ]
  },
  {
    label: "Ciencias Sociales",
    isExpandable: true,
    items: [
      { label: "Ciencias Sociales", route: "/ciencias-sociales", icon: <FaGlobeAmericas /> }
    ]
  }
];

export default function Sidebar() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "Matemáticas": true,
    "Ciencias Naturales": true,
    "Ciencias Sociales": true
  });

  const toggleGroup = (groupLabel: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupLabel]: !prev[groupLabel]
    }));
  };

  const renderNavItem = ({ label, route, icon }: SidebarItem) => (
    <NavLink
      key={route}
      to={route}
      className={({ isActive }) =>
        `w-full text-left flex items-center gap-2 justify-between rounded-lg px-3 py-2 text-slate-800 dark:text-slate-200
         hover:bg-indigo-50 dark:hover:bg-slate-800
         ${isActive ? "bg-gradient-to-r from-indigo-600/20 to-fuchsia-500/20 text-indigo-700 dark:text-fuchsia-300 ring-1 ring-white/10" : ""}`
      }
    >
      <div className="flex items-center gap-2">{icon} {label}</div>
    </NavLink>
  );

  const renderGroup = (group: SidebarGroup) => (
    <div key={group.label}>
      <button
        onClick={() => group.isExpandable && toggleGroup(group.label)}
        className={`w-full text-left flex items-center justify-between rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300
                     hover:bg-slate-50 dark:hover:bg-slate-800 font-medium
                     ${group.isExpandable ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className="flex items-center gap-2">
          {group.label === "Matemáticas" && <FaCalculator />}
          {group.label === "Ciencias Naturales" && <FaLeaf />}
          {group.label === "Ciencias Sociales" && <FaGlobeAmericas />}
          {group.label}
        </div>
        {group.isExpandable && (
          <span>{openGroups[group.label] ? "▲" : "▼"}</span>
        )}
      </button>
      {(!group.isExpandable || openGroups[group.label]) && (
        <div className="pl-4 space-y-1">
          {group.items.map(renderNavItem)}
        </div>
      )}
    </div>
  );

  return (
    <aside className="hidden md:block w-full md:w-[240px] border-r border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-indigo-50 to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="p-3 space-y-1">
        {sidebarGroups.map(renderGroup)}
      </div>
    </aside>
  );
}
