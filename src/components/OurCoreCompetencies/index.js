import React from "react";
import NavbarComp1 from "../NavbarComp1";
import Footer from "../Footer";
import Header from "../Header";

import occ1 from "../../imgs/occ1.png";
import occ2 from "../../imgs/occ2.png";
import occ3 from "../../imgs/occ3.png";
import occ4 from "../../imgs/occ4.png";
import occ5 from "../../imgs/occ5.png";

import "./index.css";

function OurCoreCompetencies() {
  return (
    <>
      <Header/>
      {/* section 1 */}
      <NavbarComp1 />

      {/* section 2 */}
      <div className="our-core-competencies-heading-container">
        <h1 className="our-core-competencies-heading">Our Core Competencies</h1>
      </div>

      {/* section 3 */}
      <div className="our-core-competencies-description-container">
        {/* first */}
        <div className="core-image-text-container">
          <div>
            <h4 className="img-heading">NEXGEN Connect</h4>
            <img alt="core-img" src={occ1} className="core-img-left" />
          </div>
          <p className="core-text-container">
            Our online trading platform provides our clients an easy, convenient
            and hassle-free trading experience. Our online trading system
            enables the clients to track the markets by setting up their own
            customized market watches, receiving research, trade alerts, real-
            time charts and a variety of MIS. The system has a built-in facility
            to transfer funds online through multiple banking gateways, thus
            enabling the clients to enjoy the benefits of enhanced exposure
            instantaneously.
          </p>
        </div>
        {/* second */}
        <div className="core-image-text-container">
          <p className="core-text-container">
            Powered by Financial Technologies, ODIN Diet Application is a
            high-end, integrated trading application for fast, efficient &
            reliable executions of trades.
          </p>
          <div className="core-img-right-container">
            <img alt="core-img" src={occ2} className="core-img-right" />
            <h4 className="img-heading">ODIN Diet Application</h4>
          </div>
        </div>
        {/* third */}
        <div className="core-image-text-container">
          <div>
            <h4 className="img-heading">OFFLINE TRADING</h4>
            <img alt="core-img" src={occ3} className="core-img-left" />
          </div>
          <p className="core-text-container">
            With our extensive network of pan-India offices and customer
            supports, you can trade offline by visiting us or calling our
            relationship managers.
          </p>
        </div>
        {/* forth */}
        <div className="core-image-text-container">
          <div>
            <p className="core-text-container">
              EQUITIES & DERIVATIVES | COMMODITY | CURRENCY
            </p>
            <p className="core-text-container">
              Technology & Research for every opportunity
            </p>
            <p className="core-text-container">
              NEXGEN, with memberships of NSE, BSE, MSEI, NSDL, CDSL and through
              its subsidiary, MCX, NCDEX, NMCE, DGCX and ICEX, renders quality
              services to investors, traders and arbitrageurs through a network.
            </p>
            <p className="core-text-container">
              NEXGEN has specialized service product bouquets for retail
              investors, HNI as well as institutions. Our robust infrastructure
              backed by an experienced research team and an ever helpful
              customer care addresses the needs of the whole spectrum of
              investors.
            </p>
          </div>
          <div>
            <img alt="core-img" src={occ4} className="core-img-right" />
            <h4 className="img-heading">INSTITUTIONAL BROKING</h4>
          </div>
        </div>
        {/* fifth */}
        <div className="core-image-text-container">
          <img alt="core-img" src={occ5} className="core-img-left" />
          <div>
            <p className="core-text-container">
              Our brokerage charges are competitive providing full value to the
              clients. The online system gives the clients an access to IPOs &
              Mutual Funds on a single click.{" "}
            </p>
            <p className="core-text-container">
              Clients can avail a variety of services and assistance from our
              customer care team by calling them on phone or writing to them
              over e-mail. Every client is personally guided by an experienced
              relationship manager for a smooth, trouble-free trading
              experience.{" "}
            </p>
            <p className="core-text-container">
              Our RMs are highly experienced & have professional knowledge on
              both investing & dealing in different market instruments.{" "}
            </p>
            <p className="core-text-container">
              NEXGEN has equally strong infrastructure both for offline as well
              as automated online trading services.
            </p>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <Footer />
    </>
  );
}

export default OurCoreCompetencies;
