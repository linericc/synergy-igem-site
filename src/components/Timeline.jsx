import { useState } from "react";
import "../css/Timeline.css";

const events = [
  { step: "First step", title: "Discharge", desc: "Patient prepares to be discharged from care" },
  { step: "Second step", title: "Social worker", desc: "Social worker matched with patient, gathers patient info and matches services with patient profile." },
  { step: "Third step", title: "Patient-contact", desc: "Patient continues use of Lucero and social worker contact with patient." },
  { step: "Fourth step", title: "Continued tracking", desc: "Lucero tracks healthcare activities of the patient." },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div
          key={index}
          className={`timeline-item ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)} 
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="timeline-year">{event.step}</div>
          <div className="timeline-content">
            <h3>{event.title}</h3>
            {activeIndex === index && <p>{event.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
