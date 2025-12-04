import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import riceigemlogo from "../assets/riceigemlogo.png";
import "../css/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isiGEM = location.pathname === "/iGEM";


  return (
    <>
    <NavLink to="/" className="global-logo-link">
      <img src={riceigemlogo} alt="Logo" className="global-logo" />
    </NavLink>
      {/* SMALL FLOATING HAMBURGER */}
        <button
        className={`home-hamburger ${isiGEM ? "hamburger-blue" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      {/* SMALL RIGHT-SIDE MENU */}
        <div className={`side-menu ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          {/* <NavLink to="/project" onClick={() => setOpen(false)}>Our Project</NavLink> */}
          <NavLink to="/iGEM" onClick={() => setOpen(false)}>About iGEM</NavLink>
          <NavLink to="/Synergy" onClick={() => setOpen(false)}>About Synergy</NavLink>
          <NavLink to="/rice" onClick={() => setOpen(false)}>Our Team</NavLink>
          {/* <NavLink to="/contact" onClick={() => setOpen(false)}>About Rice Synthetic Biology</NavLink> */}
          <NavLink to="/fundraise" onClick={() => setOpen(false)}>Support Us!</NavLink>
        </div>
    </>
  );
}
