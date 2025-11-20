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
          <NavLink to="/about" onClick={() => setOpen(false)}>iGEM</NavLink>
          <NavLink to="/rice" onClick={() => setOpen(false)}>Rice</NavLink>
          <NavLink to="/project" onClick={() => setOpen(false)}>Project</NavLink>
          <NavLink to="/fundraise" onClick={() => setOpen(false)}>Fundraise</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
    </>
  );
}
