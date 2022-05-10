import React from "react";
import { BsLinkedin } from "react-icons/bs";
import NavbarComp1 from "../NavbarComp1";
import Footer from "../Footer";
import Header from "../Header";

import occ1 from "../../imgs/occ1.png";
import abtusor from "../../imgs/abtusor.png";
import auor1 from "../../imgs/auor1.png";
import auor2 from "../../imgs/auor2.png";
import auor3 from "../../imgs/auor3.png";
import auor4 from "../../imgs/auor4.png";

import abtusot from "../../imgs/abtusot.png";

import "./index.css";

const About = () => {
  return (
    <>
      <Header/>
      {/* section 1 */}
      <NavbarComp1 />

      {/* section 2 */}
      <div className="about-us-first-container">
        <div className="about-us-first-inner-text-container">
          <p>
            Nexgen Market has demonstrated capabilities in the Institutional
            Equities space. It caters to a wide clientele comprising leading
            domestic and international institutional investors, Pension Funds,
            Hedge Funds, Mutual Funds, Insurance companies, and Banks. We value
            our relationships and have, over the years, actively hosted
            management meets, con-calls and company visits for companies under
            our coverage.
          </p>
        </div>
        <div className="about-us-first-inner-image-container">
          <div className="inner-image-container">
            <img className="inner-image" alt="stock img" src={occ1} />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="au-our-responsibilities-container">
        <img
          alt="our-responsibilities"
          className="au-our-responsibilities-img"
          src={abtusor}
        />
        <div className="au-our-responsibilities-text-container">
          <h1>Our Responsibilities</h1>
          <p>We are always careful of our responsibility</p>
          {/* first */}
          <div className="or-tc-inner-container">
            <img
              className="or-tc-inner-img"
              alt="or-tc-inner-img"
              src={auor1}
            />
            <div className="or-tc-inner-text-container">
              <h3>Focus on Best Quality</h3>
              <p>We at NexGen believe in delivering a Quality Service.</p>
            </div>
          </div>
          {/* second */}
          <div className="or-tc-inner-container">
            <img
              className="or-tc-inner-img"
              alt="or-tc-inner-img"
              src={auor2}
            />
            <div className="or-tc-inner-text-container">
              <h3>Focus on Good Relation</h3>
              <p>
                Healthy Relationship gives a great vision of Long term
                Achievements.
              </p>
            </div>
          </div>
          {/* third */}
          <div className="or-tc-inner-container">
            <img
              className="or-tc-inner-img"
              alt="or-tc-inner-img"
              src={auor3}
            />
            <div className="or-tc-inner-text-container">
              <h3>Focus on Abilities</h3>
              <p>
                Nexgen Institutional Equities prides itself on a process driven
                sales and a state of the art order management system.
              </p>
            </div>
          </div>
          {/* forth */}
          <div className="or-tc-inner-container">
            <img
              className="or-tc-inner-img"
              alt="or-tc-inner-img"
              src={auor4}
            />
            <div className="or-tc-inner-text-container">
              <h3>24/7 Support</h3>
              <p>We at NexGen believe in providing support when you need.</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="au-our-tem-container">
        <h3>Our Team</h3>
        <p className="au-our-tem-para">
          We Provide Best Sollution for Your Company
        </p>
        <div className="au-our-team-card-container">
          {/* first */}
          <div className="au-our-team-card">
            <img
              src={abtusot}
              alt="co-founder-img"
              className="au-our-team-card-img"
            />
            <p className="co-founder-name">Debadip Bandhopadhya</p>
            <p>
              <BsLinkedin color="#2196F3" size={20} /> Co-Founder
            </p>
          </div>
          {/* second */}
          <div className="au-our-team-card">
            <img
              src={abtusot}
              alt="co-founder-img"
              className="au-our-team-card-img"
            />
            <p className="co-founder-name">Debadip Bandhopadhya</p>
            <p>
              <BsLinkedin color="#2196F3" size={20} /> Co-Founder
            </p>
          </div>
          {/* third */}
          <div className="au-our-team-card">
            <img
              src={abtusot}
              alt="co-founder-img"
              className="au-our-team-card-img"
            />
            <p className="co-founder-name">Debadip Bandhopadhya</p>
            <p>
              <BsLinkedin color="#2196F3" size={20} /> Co-Founder
            </p>
          </div>
        </div>
      </div>

      {/* section last */}
      <Footer />
    </>
  );
};

export default About;
