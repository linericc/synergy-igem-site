import Synergy1 from "../assets/Synergy1.png";
import Synergy2 from "../assets/Synergy2.png";
import Synergy3 from "../assets/Synergy3.png";
import Synergy4 from "../assets/Synergy4.png";
import Synergy5 from "../assets/Synergy5.png";
import "../css/Synergy.css";

export default function Synergy() {
  return (
    <>
       <img src={Synergy1} className="Synergy-panel" />
       <img src={Synergy2} className="Synergy-panel" />
       <img src={Synergy3} className="Synergy-panel" />
       <img src={Synergy4} className="Synergy-panel" />
       <img src={Synergy5} className="Synergy-panel" />
    </>
  );
}
