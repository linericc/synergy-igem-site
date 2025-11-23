import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Timeline from "../components/Timeline.jsx";
import Homepage from "../assets/Homepage.png";
import "../css/Home.css";

export default function Home() {
  // Scroll-based fade
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full-screen graphic */}
      <motion.div
        style={{ opacity, scale, y }}
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50 transition-opacity duration-700 ${
          hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <motion.img
          src={Homepage}
          alt="Home page 1st image"
          className="Homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    <section className="hero">
      {/* Main homepage content */}
        <div className="hero__layout">
          <div className="hero__content">
              <h1>Rice Synergy</h1>
              <p>
                A universal solution to healthcare inadequacies in
                underprivileged communities.
              </p>
              <a className="homebtn" href="/about">
                Our project
              </a>
          </div>
        </div>
    </section>
    <section className="how-we-work">
      <h2>How we work</h2>
      <Timeline />
    </section>
    </>
  );
}
