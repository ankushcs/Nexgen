import {BsTelephone} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import './index.css';
import nexgen from '../../imgs/nexgen.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top-container">
                <div className="footer-top-image-container">
                    <img src={nexgen} alt="company logo" className="footer-company-logo"/>
                </div>
                <div className="footer-top-section-1">
                    <p>Do's & Don'ts</p>
                    <p>Important Links</p>
                    <p>Regulatory Update</p>
                    <p>Investor Complaints</p>
                    <p>FBI Structured Project</p>
                </div>
                <div className="footer-top-section-2">
                    <p>Disclaimer</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Code of Ethics & Conduct</p>
                </div>
                <div className="footer-top-section-3">
                    <h3>Contact Us</h3>
                    <p><BsTelephone/> 9830127388</p>
                    <p><FiMail/> info@nexfinserve.com</p>
                </div>
            </div>
            <div className="footer-bottom-container">
                <p>&#169; 2018 NEXGEN Design and Maintained by Andromeda Digital. All Rights Reserved.</p>
            </div>
        </div>
    )
};

export default Footer