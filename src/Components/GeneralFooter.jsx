import React from "react";
import { useMediaQuery } from "react-responsive";
import "./comp.scss";
const GeneralFooter = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="gFooter">
          <div className="gFooterWrapper">
            <p>© Shawn Novel & Associates</p>
            <p style={{ color: "rgba(228, 226, 206, 0.815)" }}>
              Developed by
              <span>
                <a
                  href="https://www.aveneur.com"
                  style={{
                    textDecoration: "none",
                    color: "#177e70",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Aveneur
                </a>
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="gFooterM">
          <div className="gFooterWrapper">
            <p>© Shawn Novel & Associates</p>
            <p style={{ color: "rgba(228, 226, 206, 0.815)",
                    textAlign:"right", }}>
              Developed by
              <span>
                <a
                  href="https://www.aveneur.com"
                  style={{
                    textDecoration: "none",
                    color: "#177e70",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Aveneur
                </a>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GeneralFooter;
