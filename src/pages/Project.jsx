import Ourproject from "../assets/Ourproject.png";
import "../css/Project.css";

export default function Project() {
  return (
    <>
   <img src={Ourproject} className="Ourproject" />
   <main className="container">
      <section classname="hero">
        <section className="project">
          <h2>
            Medical Solutions with continuous monitoring.
          </h2>
          <p>
            Filler text.
          </p>
        </section>
      </section>
    </main>
    </>
  );
}
