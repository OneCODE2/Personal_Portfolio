import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "About", end: true },
  { to: "/Resume", label: "Experience" },
  { to: "/Projects", label: "Projects" },
  { to: "/Contact", label: "Connect" },
];

const Navbar = () => {
  return (
    <nav
      className="rounded-2xl px-3 py-2 md:my-4"
      style={{
        background: "color-mix(in oklab, var(--surface-elevated) 94%, transparent)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--outline-glow)",
      }}
    >
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className="wave-btn px-3 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-accent)" : "var(--color-text)",
              background: isActive
                ? "color-mix(in oklab, var(--color-accent) 12%, transparent)"
                : "transparent",
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
