import { useState } from "react";
import Supportus1 from "../assets/Supportus1.png";
import "../css/Timeline.css";


export default function FundraiseFadeIn() {
    const { scrollY } = useScroll();
        const opacity = useTransform(scrollY, [0, 500], [1, 0]);
        // const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
        const y = useTransform(scrollY, [0, 300], [0, -100]);

        const [hidden, setHidden] = useState(false);
        useEffect(() => {
            const handleScroll = () => setHidden(window.scrollY > 200);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

  return (
    <>
    <motion.div
        style={{ opacity, y }}
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-50 transition-opacity duration-700 ${
          hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <motion.img
          src={Supportus1}
          alt="Fundraise 1 first slide"
          className="Ourproject"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      </>
    );
}