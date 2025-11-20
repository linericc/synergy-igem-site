import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* SMALL FLOATING HAMBURGER */}
        <button
          className="home-hamburger"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      {/* SMALL RIGHT-SIDE MENU */}
        <div className={`side-menu ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
         <NavLink to="/project" onClick={() => setOpen(false)}>Our Project</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About iGEM</NavLink>
          <NavLink to="/rice" onClick={() => setOpen(false)}>About Rice Synergy & Rice iGEM</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>About Rice Synthetic Biology</NavLink>
          <NavLink to="/fundraise" onClick={() => setOpen(false)}>How to Support</NavLink>
        </div>
    </>
  );
}
