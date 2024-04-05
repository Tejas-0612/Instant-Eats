import React from "react";
import { Link } from "react-router-dom";

import LOGO from "../images/logo.png";
import IMG1 from "../images/about-card1.jpg";
import IMG2 from "../images/about-card2.jpg";
import IMG3 from "../images/about-card3.jpg";
import ABOUTUS_SVG from "../images/aboutus.svg";
import COVER_IMG from "../images/cover-image.jpg";

const About = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img className="about-bg-img" src={COVER_IMG} />
        </div>
        <div className="about-con">
          <div className="about-label">
            <Link to="/">
              <img src={LOGO} className="w-36" />{" "}
            </Link>
            <h1 className="about-title"> 𝑰𝒏𝒔𝒕𝒂𝒏𝒕 𝑬𝒂𝒕𝒔</h1>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-16">
        <div className="about-card1">
          <div className="about-card-des">
            <h1 className="about-card-title">
              Deliciously aromatic biryani, made just for you.
            </h1>
            <p className="my-4">
              Elevate your taste buds to new heights with our tantalizing
              biryani.
            </p>
            <button className="about-card-btn">Proceed to Order &gt;</button>
          </div>
          <div className="about-card-imgDiv">
            <img src={IMG1} className="about-card-img md:rounded-r-xl" />
          </div>
        </div>
        <div className="about-card2">
          <div className="about-card-imgDiv">
            <img src={IMG2} className="about-card-img md:rounded-l-xl" />
          </div>
          <div className="about-card-des">
            <h1 className="about-card-title">
              Delight your taste buds with authentic South Indian flavors
            </h1>
            <p className="my-4">
              Get ready for a taste sensation! Best Deals offers the best of
              South Indian cuisine at incredible prices!
            </p>
            <button className="about-card-btn">Proceed to Order</button>
          </div>
        </div>
        <div className="about-card1">
          <div className="about-card-des">
            <h1 className="about-card-title">
              Satisfy your cravings, one Burger at a time.
            </h1>
            <p className="my-4">
              Get ready for a flavor adventure with our epic burgers, guaranteed
              to satisfy your cravings.
            </p>
            <button className="about-card-btn">
              Proceed to Order <span className="ml-2 text-lg">&gt;</span>
            </button>
          </div>
          <div className="about-card-imgDiv">
            <img src={IMG3} className="about-card-img md:rounded-r-xl" />
          </div>
        </div>
      </div>

      <div className="about-secBg">
        <div className="about-sec">
          <div className="w-[95%] md:w-1/3">
            <img src={ABOUTUS_SVG} />
          </div>
          <div className="about-sec-des">
            <h1>Are you ready to order with best deals?</h1>
            <p>
              Craving something delicious? Best Deals has the best offers on
              mouthwatering dishes. Let's order!
            </p>
            <button>
              Proceed to Order <span className="ml-2">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
