import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";
import riceigemlogo from "../assets/riceigemlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";


  return (
    <>
    <NavLink to="/" className="global-logo-link">
      <img src={riceigemlogo} alt="Logo" className="global-logo" />
    </NavLink>
      {/* SMALL FLOATING HAMBURGER */}
        <button
        className={`home-hamburger ${isHome ? "hamburger-white" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      {/* SMALL RIGHT-SIDE MENU */}
        <div className={`side-menu ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          {/* <NavLink to="/project" onClick={() => setOpen(false)}>Our Project</NavLink> */}
          <NavLink to="/iGEM" onClick={() => setOpen(false)}>About iGEM</NavLink>
          <NavLink to="/rice" onClick={() => setOpen(false)}>Our Team</NavLink>
          {/* <NavLink to="/contact" onClick={() => setOpen(false)}>About Rice Synthetic Biology</NavLink> */}
          <NavLink to="/fundraise" onClick={() => setOpen(false)}>Support Us!</NavLink>
        </div>
    </>
  );
}
