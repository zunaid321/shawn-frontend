import React from "react";
import "./comp.scss";
import { useMediaQuery } from "react-responsive";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaGooglePlusG } from "react-icons/fa";

function TopBar() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="topBar">
          <div className="addr">
            <h5>260/C Tejgaon I/A Dhaka, 1208</h5>
          </div>
          <div className="mail">
            <h5>admin@shawnnovel.com</h5>
          </div>
          <div className="social">
            <h3><FaFacebook/></h3>
            <h3><FaLinkedinIn/></h3>
            <h3><FaTwitter/></h3>
            <h3><FaGooglePlusG/></h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TopBar;
