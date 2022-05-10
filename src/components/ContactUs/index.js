import {useState} from "react";
import NavbarComp1 from "../NavbarComp1";
import Footer from "../Footer";
import Header from "../Header";
import TextField from "@material-ui/core/TextField";

import "./index.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <>
      <Header/>
      {/* section 1 */}
      <NavbarComp1 />

      {/* section 2 */}
      <div className="contact-us-main-container">
        <div className="contact-us-card">
          <h3>Contact Us</h3>
          <form className="contact-us-form">
            <TextField
              value={name}
              label="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              value={email}
              label="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              value={msg}
              label="Enter your message"
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
            <button className="contact-us-button" type="button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* section 3 */}
      <Footer />
    </>
  );
}

export default ContactUs;
