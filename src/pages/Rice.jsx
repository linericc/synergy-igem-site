import Team1 from "../assets//team/Team1.png";
import Team2 from "../assets//team/Team2.png";
import Team3 from "../assets//team/Team3.png";
import Team4 from "../assets//team/Team4.png";
import Team5 from "../assets//team/Team5.png";
import Team6 from "../assets//team/Team6.png";
import Team7 from "../assets//team/Team7.png";
import Team8 from "../assets//team/Team8.png";
import Team9 from "../assets//team/Team9.png";
import Team10 from "../assets//team/Team10.png";
import "../css/Rice.css";


export default function Rice() {
  return (
    <>
    <img src={Team1} className="Team-panel" />
    <img src={Team2} className="Team-panel" />
    <img src={Team3} className="Team-panel" />
    <img src={Team4} className="Team-panel" />
    <img src={Team5} className="Team-panel" />
    <img src={Team6} className="Team-panel" />
    <img src={Team7} className="Team-panel" />
    <img src={Team8} className="Team-panel" />
    <img src={Team9} className="Team-panel" />
    <img src={Team10} className="Team-panel" />

    <main className="container">
      <footer className="rice">
      </footer>
    </main>
    </>
  );
}
