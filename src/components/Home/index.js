import React, { useState } from "react";
// import NavbarComp from "../NavbarComp";
import { Modal, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import NavbarComp1 from "../NavbarComp1";
import Carousal from "../Carousal";
import Card1 from "../Card1";
import Footer from "../Footer";
import Header from '../Header';

import firstImg from "../../imgs/flat-color-icons_neutral-trading.png";
import secondImg from "../../imgs/emojione_handshake-medium-skin-tone.png";
import thirdImg from "../../imgs/Vector.png";
import firstBrandLogo from "../../imgs/Edelweiss.jpg";
import secondBrandLogo from "../../imgs/Tata-Aia.jpg";
import thirdBrandLogo from "../../imgs/profit-mart.jpg";

import hpsave from "../../imgs/hpsave.png";
import hpnotice from "../../imgs/hpnotice.png";

import "./index.css";

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <Header/>
      {/* section 1 */}
      {/* <NavbarComp /> */}
      <NavbarComp1 />

      {/* section 2 */}
      <Carousal />

      {/* section 3 */}
      <div className="portfolio-management-service">
        <h3>Portfolio Management Services</h3>
        <div className="home-contact-us-button-container">
          <button
            type="button"
            className="contact-us-button"
            onClick={handleShow}
          >
            Contact Us
          </button>
          <Modal show={show} onHide={handleClose} className="modal-container">
            <Modal.Header
              closeButton
              className="d-flex flex-column justify-content-center modal-top"
            >
              <Modal.Title className="modal-title">
                We shall get in touch with you & help you Invest
              </Modal.Title>
              <p>Quick, Fast and Simple</p>
            </Modal.Header>
            <Modal.Body>
              <form className="home-contact-us-form">
                <TextField
                  value={name}
                  label="Enter your name"
                  className="text-field"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <TextField
                  value={email}
                  label="Enter your email"
                  className="text-field"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  value={mobile}
                  label="Enter your Mobile Number"
                  className="text-field"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                <TextField
                  value={city}
                  label="Enter your City"
                  className="text-field"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
                <Button variant="secondary" className="home-contact-us-button" type="button">
                  Submit
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      {/* section 4 */}
      <div className="saving-leads-to-investment">
        <img
          alt="saving-leads-to-investment"
          className="saving-img"
          src={hpsave}
        />
        <div className="saving-text-container">
          <h3>Saving leads to investment</h3>
          <ul>
            <li>
              Standing at this date we can definitely say that a time will come
              when everyone will earn more or less.
            </li>
            <li>But have you started savings.??</li>
          </ul>
        </div>
      </div>

      {/* section 5 */}
      <div className="our-notice-board-container">
        <div className="our-notice-board-card">
          <div className="our-notice-board-card-text-container">
            <h3>Our Notice Board</h3>
            <p>Collaboration with leading Financial Institutions</p>
            <p>Provide end to end services of Edelweiss</p>
            <p>To be the most trusted Brand across Eastern Region.</p>
          </div>
          <div className="our-notice-board-card-img-container">
            <img alt="our-notice-board-card-img" src={hpnotice} />
          </div>
        </div>
      </div>
      {/* section 6 */}
      <div className="what-do-you-want-to-do-container">
        <h3>What do you want to do?</h3>
        <div className="want-to-do-card-container">
          <Card1
            imgUrl={firstImg}
            textBlue="I want to"
            textBlack="Open a trading Account"
          />
          <Card1
            imgUrl={secondImg}
            textBlue="Start a business and grow with us,"
            textBlack="Partner with Us"
          />
          <Card1
            imgUrl={thirdImg}
            textBlue="A Step-By-Step Guide!"
            textBlack="How to Achieve Your Financial Goals?"
          />
        </div>
      </div>
      {/* section 7 */}
      <div className="our-brand-partners">
        <h3>Our Brand Partners</h3>
        <div className="brand-partners-brands-container">
          <img
            className="brand-partners-img"
            alt="brand logo"
            src={firstBrandLogo}
          />
          <img
            className="brand-partners-img"
            alt="brand logo"
            src={secondBrandLogo}
          />
          <img
            className="brand-partners-img"
            alt="brand logo"
            src={thirdBrandLogo}
          />
        </div>
      </div>
      {/* section 8 */}
      <Footer />
    </>
  );
};
export default Home;
