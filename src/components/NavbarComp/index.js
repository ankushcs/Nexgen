import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import nexgen from "../../imgs/nexgen.png";
import "./index.css";

const NavbarComp = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    if (screenWidth > 500) {
      setToggleMenu(false);
    }

    window.addEventListener("resize", changeWidth);
  }, [screenWidth]);

  const renderThreeDotsVerticalButton = () => {
    return (
      <button
        className="btn btn-primary"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <BsThreeDotsVertical />
      </button>
    );
  };

  const renderThreeDotsButton = () => {
    return (
      <button
        className="btn btn-primary"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <BsThreeDots />
      </button>
    );
  };

  return (
    <div className="header-container">
      <div className="header__heading-container">
        <Link to="/" className="link">
          <img
            src={nexgen}
            alt="company logo"
            className="navbar-company-logo"
          />
        </Link>
        {screenWidth < 500 &&
          (toggleMenu
            ? renderThreeDotsVerticalButton()
            : renderThreeDotsButton())}
      </div>
      {screenWidth > 500 && (
        <ul className="header__list-items-container">
          <li className="header__list_item">
            <Link to="/about-us" className="link">
              About Us
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/mission-and-vision" className="link">
              Mission and Vision
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/our-values" className="link">
              Our Values
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/our-core-competencies" className="link">
              Our Core Competencies
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/product-and-services" className="link">
              Product and services
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
      {toggleMenu && (
        <ul className="header__list-items-container">
          <li className="header__list_item">
            <Link to="/about-us" className="link">
              About Us
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/mission-and-vision" className="link">
              Mission and Vision
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/our-values" className="link">
              Our Values
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/our-core-competencies" className="link">
              Our Core Competencies
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/product-and-services" className="link">
              Product and services
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarComp;
