import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { BsTelephone, BsLinkedin, BsPinterest } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <p>
        NIFTY: 17276.30 <BiDownArrow color="red" /> -28.30 (-0.16%) / SENSEX:
        57832.97 <BiUpArrow color="green" /> -59.04 (-0.10%)
      </p>
      <div className="header-div-container">
        <div className="header-first-container">
          <p>
            <BsTelephone /> 9830127388
          </p>
          <p>
            <FiMail /> info@nexfinserve.com
          </p>
        </div>
        <div className="header-second-container">
            <p>
                Follow us <FaFacebookF/> <FaTwitter/> <BsLinkedin/> <BsPinterest/>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
