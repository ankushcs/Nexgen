import React from "react";
import NavbarComp1 from "../NavbarComp1";
import Footer from "../Footer";
import Header from "../Header";

import financial from "../../imgs/financial-advice-img.png";
import portfolio from '../../imgs/portfolio-management-services.png';
import research from '../../imgs/research-call.png';
import mutual from '../../imgs/mutual-fund.png';
import insurance from '../../imgs/insurance.png';
import consultancy from '../../imgs/consultancy-services.png';

import './index.css'

function ProductAndServices() {
  return (
    <>
      <Header/>
      {/* section 1 */}
      <NavbarComp1 />
      {/* section 2 */}
      <div className="product-and-services-container">
        <h3 className="product-and-services-heading">Product and Services</h3>
        <hr className="horizontal-rule" />
        <div className="product-and-services-sub-container">
          <div className="product-and-services-sub-container-image-container image-container">
            <h4>Financial Advice</h4>
            <img
              alt="financial advice img"
              src={financial}
              className="financial-advice-img"
            />
          </div>
          <div className="product-and-services-sub-container-text-container">
            <p>
              Nexgen Market has demonstrated capabilities in the Institutional
              Equities space. It caters to a wide clientele comprising leading
              domestic and international institutional investors, Pension Funds,
              Hedge Funds, Mutual Funds, Insurance companies, and Banks. We
              value our relationships and have, over the years, actively hosted
              management meets, con-calls and company visits for companies under
              our coverage.
            </p>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="our-services">
        <h3 className="our-services-heading">Our Services</h3>
        <div className="our-services-first-container">
          <div className="image-container">
            <img alt="img" src={portfolio} />
            <h4>Portfolio Management Service</h4>
          </div>
          <div className="image-container">
            <img alt="img" src={research} />
            <h4>Research Calls for Traders</h4>
          </div>
        </div>
        <div className="our-services-second-container">
          <div className="image-container">
            <img alt="img" src={mutual} />
            <h4>Mutual Funds</h4>
          </div>
        </div>
        <div className="our-services-first-container">
          <div className="image-container">
            <img alt="img" src={insurance} />
            <h4>Insurance</h4>
          </div>
          <div className="image-container">
            <img alt="img" src={consultancy} />
            <h4>Consultancy Services</h4>

          </div>
        </div>
      </div>
      {/* section */}
      <Footer />
    </>
  );
}

export default ProductAndServices;
