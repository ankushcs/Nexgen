import React from "react";
import NavbarComp1 from "../NavbarComp1";
import Footer from "../Footer";
import Header from "../Header";

import "./index.css";

function OurValues() {
  return (
    <>
      <Header/>
      {/* section 1 */}
      <NavbarComp1 />
      {/* section 2 */}
      <div className="our-values">
        <h1 className="our-values-heading">Our Values</h1>
        <div className="our-values-table-container">
          <div className="our-values-table-left-side">
            <h3 className="table-heading">Always Be Client Centric</h3>
            <p className="table-para">
              Clients' interests always come first. If we serve our clients
              well, our own success will follow.
            </p>
            <h3 className="table-heading">Always Be Prudent</h3>
            <p className="table-para">
              We apply wise financial and business strategies. Our clients rely
              on our experience, judgment and analysis for their hard earned
              wealth to grow.
            </p>
          </div>
          <div className="our-values-table-right-side">
            <h3 className="table-heading">Always Be Transparent</h3>
            <p className="table-para">
              Integrity and honesty are at the heart of our business. We
              maintain highest ethical standards and demonstrate sound judgment
              in executing the responsibility.
            </p>
            <h3 className="table-heading">Always Be Foresighted</h3>
            <p className="table-para">
              Long term relationship with our clients is more important than
              short term gains. Always anticipate change and be prepared.
            </p>
          </div>
        </div>
        <div className="our-values-bottom-container">
          <p>
            We are the financial solution company committed to help you achieve
            your goals. Our wide range of services and a diversified client base
            is an outcome of our expertise in guiding you through the financial
            markets. We offer diverse services including Equities, Commodities &
            Currencies Markets Intermediate, Portfolio Management Schemes (PMS),
            Depository Services, Mutual fund and IPO distribution, Qualified
            Depository Participant (QDP) services, Securities Lending and
            Borrowing Services, Corporate Advisory and International brokerage,
            Insurance etc. We account for a substantial share of NSE clearing
            volumes in the Equity and Currency derivative segments. Our
            expertise in serving our clients to their objectives has earned us
            the trust of reputed names in the finance industry.
          </p>
        </div>
      </div>
      {/* section 3 */}
      <Footer />
    </>
  );
}

export default OurValues;
