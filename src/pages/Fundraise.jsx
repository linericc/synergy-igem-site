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
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ marginTop: '1rem', color: "white", fontSize: "18px" }}>
          Please see additional Donation Information at the website for the Rice University Student Activities Office:{" "}
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
    </>
  );
}
