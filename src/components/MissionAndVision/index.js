import React from "react";
import NavbarComp1 from "../NavbarComp1";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";

const MissionAndVision = () => {
  return (
    <>
      <Header/>
      {/* section 1 */}
      <NavbarComp1 />

      {/* section 2 */}
      <div className="mission-and-vision">
        <h1>Mission and Vision</h1>
        <div className="mission-and-vision-card-container">
          <div className="mission-and-vision-card">
            <p>
              To become the leading and most respected financial solutions
              company.
            </p>
            <p>No matter what the size of our client is;</p>
            <p>No matter what the market condition is;</p>
            <p>No matter what the asset nature is;</p>
            <p>
              We will always be driven by the sole mission for our clients that
              their money must grow.
            </p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="capabilities-and-research-container">
        <div className="capabilities-container">
          <h5>Capabilities</h5>
          <p>
            Nexgen Institutional Equities prides itself on a process driven
            sales and a state of the art order management system.
          </p>
          <p>
            We have the capability to execute DMA and one touch DMA orders. Our
            execution expertise is further demonstrated through basket orders,
            rolling long/short positions from expiring to next month’s futures
            series.
          </p>
          <p>
            Our people do not just strengthen our business, they personify
            strength. The Sales team is comprised of top equity professionals
            that translate research findings into actionable advice for clients
            based on specific needs, seamlessly executing complex trades across
            the entire spectrum of trading strategies.
          </p>
        </div>
        <div className="search-container">
          <h5>Research</h5>
          <p>
            Globe Capital’s research capability, particularly in mid caps, is
            known. Our diverse and profound research touches all important
            aspects. Research has consistently played a part in establishing
            Globe as a market and thought leader. We are driven by research.
          </p>
          <p>Economy & Strategy</p>
          <p>Thematic Research</p>
          <p>Stock & Sector Research</p>
          <p>Alternative Research</p>
          <p>
            We generate a host of alternative investment strategies that cover
            the entire spectrum of opportunities
          </p>
          <p>Special Situation Arbitrage</p>
          <p>Interest/Volatility Arbitrage</p>
          <p>Deep Value/ Turnaround Opportunities</p>
          <p>Alternative Research</p>
        </div>
      </div>

      {/* section 4 */}
      <Footer />
    </>
  );
};

export default MissionAndVision;
