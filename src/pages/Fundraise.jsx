import Supportus1 from "../assets/Supportus1.png";
import Supportus2 from "../assets/Supportus2.png";
import Supportus3 from "../assets/Supportus3.png";
import "../css/Project.css";

export default function Fundraise() {
  return (
    <>
      <img src={Supportus1} className="Ourproject" />
      <img src={Supportus2} className="Ourproject" />
      <img src={Supportus3} className="Ourproject" />
      {/* tony edit: added hyperlink for the gifts and donations section */}
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <a 
          href="https://studentcenter.rice.edu/student-activities/club-resources/financial-resources/gifts-donations#:~:text=Mailed%20Donations,.%2C%20Houston%2C%20TX%2077005"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#003D82',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          Gifts and Donations
        </a>
      </div>
    </>
  );
}
