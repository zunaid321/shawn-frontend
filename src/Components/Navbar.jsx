import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import "./comp.scss";
import "./serviceDropdown.scss";
import { useMediaQuery } from "react-responsive";
import Dropdown from "./Dropdown";
import { RootStoreContext } from "../stores/rootStore";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const store = useContext(RootStoreContext);
  const { setDropdown, dropdown } = store.navStore;
  const [burger, setBurger] = useState(false);
  const { getServices } = store.commonStore;

  useEffect(() => {
    getServices();
  }, [getServices]);

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const handleHover = () => {
    setDropdown(true);
  };
  const handleHoverClose = () => {
    setDropdown(false);
  };
  const handleClick = () => {
    setDropdown(!dropdown);
  };
  const handleBurger = () => {
    setBurger(!burger);
  };

  const [navbarbg, setNavbarbg] = useState(false);

  const changebg = () => {
    if (window.scrollY >= "10") {
      setNavbarbg(true);
    } else {
      setNavbarbg(false);
    }
  };
  window.addEventListener("scroll", changebg);

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <div className={navbarbg ? "navContainer active" : "navContainer"}>
            <div className="logoContainer">
              <h2>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  Shawn Novel & Associates
                </NavLink>
              </h2>
            </div>
            <nav className="menuContainer">
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/aboutUs"
                >
                  About Us
                </NavLink>
              </h4>
              <div className="menuContainerService">
                <h4 onMouseOver={handleHover} onClick={handleClick}>
                  Services
                </h4>
              </div>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/people"
                >
                  People
                </NavLink>
              </h4>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/clients"
                >
                  Clients
                </NavLink>
              </h4>
              <h4 onMouseOver={handleHoverClose}>News & Insights</h4>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/joinUs"
                >
                  Join Us
                </NavLink>
              </h4>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/contactUs"
                >
                  Contact Us
                </NavLink>
              </h4>
            </nav>
          </div>
          {dropdown && <Dropdown />}
        </>
      ) : (
        <>
          <div
            className={navbarbg ? "navMobContainer active" : "navMobContainer"}
          >
            <div className="logoContainerM">
              <h2>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  Shawn Novel & Associates
                </NavLink>
              </h2>
            </div>
            <div className="hamburger" onClick={handleBurger}>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
          </div>
          {burger && (

            <div className="MobNavOpen" >
              <div className="logoContainerM2" onClick={handleBurger}>
              <h2>
                <NavLink
                  style={{ textDecoration: "none", color: "rgba(228, 226, 206, 0.815)" }}
                  to="/"
                >
                  Shawn Novel & Associates
                </NavLink>
              </h2>
            </div>
              <div className="cross" onClick={handleBurger}></div>
              <div className="MobContainer">
                {" "}
                <nav className="menuContainerM">
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "rgba(228, 226, 206, 0.815)" }}
                      to="/aboutUs"
                    >
                      About Us
                    </NavLink>
                  </h4>
                  <div className="menuContainerService">
                    <h4 onMouseOver={handleHover} onClick={handleClick}>
                      Services
                    </h4>
                  </div>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "rgba(228, 226, 206, 0.815)" }}
                      to="/people"
                    >
                      People
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "rgba(228, 226, 206, 0.815)" }}
                      to="/clients"
                    >
                      Clients
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>News & Insights</h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "rgba(228, 226, 206, 0.815)" }}
                      to="/joinUs"
                    >
                      Join Us
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "rgba(228, 226, 206, 0.815)" }}
                      to="/contactUs"
                    >
                      Contact Us
                    </NavLink>
                  </h4>
                </nav>
              </div>
          {dropdown && <Dropdown />}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default observer(Navbar);
