import React from "react";
// import News from '../Home/News'
import "./comp.scss";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
// import NewsTicker from "react-advanced-news-ticker/src/react-advanced-news-ticker";

const HomeFooter = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="homeFooter">
          <div className="homeFooterLeft">
            <div className="FooterLeft">
              <h1>Shawn Novel & Associates</h1>
              <h3>Lawyers Comitted to Excellence</h3>
            </div>
            <div className="Aveneur">
              <h5>
                Developed by
                <span>
                  <a
                    href="https://www.aveneur.com"
                    style={{ textDecoration: "none", color: "#177e70" }}
                  >
                    {" "}
                    Aveneur
                  </a>
                </span>
              </h5>
            </div>
          </div>
          <div className="homeFooterCenter">
            <h1>ok</h1>
          </div>
          <div className="homeFooterRight">
            <div className="socialBottom">
              <h3>
                <FaFacebook />
              </h3>
              <h3>
                <FaLinkedinIn />
              </h3>
              <h3>
                <FaTwitter />
              </h3>
              <h3>
                <FaGooglePlusG />
              </h3>
            </div>
            <div className="AppointmentContainer">
              <div className="cinfo">
                <h4>260/C Tejgaon I/A Dhaka, 1208</h4>
                <h4>admin@shawnnovel.com</h4>
              </div>

              <NavLink
                style={{
                  textDecoration: "none",
                  color: "rgba(228, 226, 206, 0.815)",
                }}
                to="/aboutUs"
              >
                <div className="toContact">Reach out to us !</div>
              </NavLink>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.3776421428825!2d90.402325!3d23.769563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8671c44991ec9a40!2sShawn%20Novel%20%26%20Associates!5e0!3m2!1sen!2sbd!4v1625753876064!5m2!1sen!2sbd"
                style={{ border: "0", width: "100%", height: "100%" }}
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="homeFooterM">
          <div className="homeFooterCenterM">
            {/* <News/>    */}
            {/* <NewsTicker>
  <div>Etiam imperdiet volutpat libero eu tristique.</div>
  <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
  <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
  <div>Nunc ultrices tortor eu massa placerat posuere.</div>
</NewsTicker> */}
          </div>
          <div className="homeFooterRightM">
            <h1>Contact Us</h1>
            <div className="socialBottom">
              <h3>
                <FaFacebook />
              </h3>
              <h3>
                <FaLinkedinIn />
              </h3>
              <h3>
                <FaTwitter />
              </h3>
              <h3>
                <FaGooglePlusG />
              </h3>
            </div>
            <div className="AppointmentContainer">
              <div className="cinfo">
                <h4>260/C Tejgaon I/A Dhaka, 1208</h4>
                <h4>admin@shawnnovel.com</h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.3776421428825!2d90.402325!3d23.769563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8671c44991ec9a40!2sShawn%20Novel%20%26%20Associates!5e0!3m2!1sen!2sbd!4v1625753876064!5m2!1sen!2sbd"
                style={{ border: "0", width: "100%", height: "100%" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="homeFooterLeftM">
            <div className="FooterLeftM">
              <h1>Shawn Novel & Associates</h1>
              <h3>Lawyers Comitted to Excellence</h3>
            </div>
            <div className="Aveneur">
              <h5>
                Developed by
                <span>
                  <a
                    href="https://www.aveneur.com"
                    style={{ textDecoration: "none", color: "#177e70" }}
                  >
                    {" "}
                    Aveneur
                  </a>
                </span>
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeFooter;
