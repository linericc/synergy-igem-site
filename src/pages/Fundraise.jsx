import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Supportus1 from "../assets/Supportus1.png";
import Supportus2 from "../assets/Supportus2.png";
import Supportus3 from "../assets/Supportus3.png";
import "../css/Project.css";

export default function Fundraise() {
    // Scroll-based fade
    const { scrollY } = useScroll();
    const opacity1 = useTransform(scrollY, [0, 500], [1, 0]); // fade in
    const y1 = useTransform(scrollY, [0, 300], [0, -100]);

    const opacity2 = useTransform(scrollY, [0, 500], [0, 1]); // fade out 
    const y2 = useTransform(scrollY, [0, 300], [50, 0]);


    const [hidden, setHidden] = useState(false);
    useEffect(() => {
      const handleScroll = () => setHidden(window.scrollY > 200);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
    <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50 transition-opacity duration-700 ${
          hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <motion.img
          src={Supportus1}
          alt="Fundraise 1 first slide"
          className="Ourproject"
          transition={{ duration: 1 }}
        />
      </motion.div>
      {/* tony edit: added hyperlink for the gifts and donations section */}
      <div className="FundraiseText">
        <p style={{ marginTop: '1rem', color: "white", fontSize: "25px", textAlign: "center"}}>
          Please see additional Donation Information at the website for the <br></br>
          Rice University Student Activities Office: </p>
          <p style={{textAlign: "center", color: "white", fontSize: "30px", marginTop: '1rem', marginBottom: '3rem'}}>
          <a 
            href="https://studentcenter.rice.edu/student-activities/club-resources/financial-resources/gifts-donations#:~:text=Mailed%20Donations,.%2C%20Houston%2C%20TX%2077005"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              textDecoration: 'underline',
              color: 'inherit'
            }}
          >
            Gifts and Donations
          </a>
        </p>
      </div>
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50 transition-opacity duration-700 ${
          hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <motion.img
          src={Supportus2}
          alt="Fundraise 1 second slide"
          className="Ourproject"
          transition={{ duration: 1 }}
        />
      </motion.div>
      <img src={Supportus3} className="Ourproject" />
    </>
  );
}
