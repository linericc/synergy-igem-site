import Whatisigem from "../assets/Whatisigem.png";
import Whatisigem2 from "../assets/Whatisigem2.png";
import Whatisigem3 from "../assets/Whatisigem3.png";
import "../css/About.css";

export default function About() {
  return (
    <>
      {/* FULL-WIDTH HERO IMAGE */}
      <img src={Whatisigem} className="What-is-igem" />
      <img src={Whatisigem2} className="What-is-igem" />
      <img src={Whatisigem3} className="What-is-igem" />
      {/* Normal content (inside container) */}
      <main className="container">
        <section className="section">
          <h2>About iGEM</h2>
          <p>
           Rice University's Igem
          </p>
        </section>
      </main>
    </>
  );
}
