// src/components/hotelOwner/Sidebar.jsx
import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets?.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets?.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets?.listIcon },
  ];

  return (
    <nav
      aria-label="Owner sidebar"
      className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 bg-white"
    >
      {sidebarLinks.map((item) => {
        const iconSrc = item.icon ?? ""; // defensive fallback
        // Use end=true only for exact matching of the base '/owner' path
        const endMatch = item.path === "/owner";

        return (
          <NavLink
            to={item.path}
            key={item.path}
            end={endMatch}
            title={item.name} // helpful tooltip when collapsed
            className={({ isActive }) =>
              `flex items-center py-3 px-4 md:px-8 gap-3 transition-colors 
               ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600" : "hover:bg-gray-100/90 border-white text-gray-700"}`
            }
          >
            {iconSrc ? (
              <img
                src={iconSrc}
                alt={`${item.name} icon`}
                className="h-6 w-6 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              // simple fallback icon (text circle) if icon missing
              <span className="h-6 w-6 inline-flex items-center justify-center rounded-full bg-gray-200 text-xs">
                {item.name.charAt(0)}
              </span>
            )}

            <p className="md:block hidden text-center">{item.name}</p>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Sidebar;
