import React, { Component } from "react";
import GeneralFooter from "../Components/GeneralFooter";
import Head from "./ShawnNovel.jpeg";
import "./people.scss";
import { useMediaQuery } from "react-responsive";
import SrAssociates from "./SrAssociates";
import Associates from "./Associates";

const People = () => {
  // const [headSec, setheadSec] = useState(false);
  // const scrollHor = () => {
  //   if (window.scrollY >= 5) {
  //     setheadSec(true);
  //   } else {
  //     setheadSec(false);
  //   }
  // };
  // window.addEventListener("scroll", scrollHor);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <div className="forBG"></div>
          <div className="MainContainer">
            {/* Shawn Novel */}
            <div className="Section1">
              <div className="HeadContainer">
                <h1>Head of the Firm</h1>
                <div className="HeadContents">
                  <div className="HeadLeft">
                    <img src={Head} alt="Shawn Novel" />
                    <div className="HeadCred">
                      <h2>Shawn S. Novel, Esq.</h2>
                      <h4>LL. B. (Hons.)Cardiff University</h4>
                      <h4>LL.M., Cornell Law School</h4>
                      <h4>Barrister at Law of Lincoln’s Inn</h4>
                      <h4>Attorney at Law, New York, USA</h4>
                      <h4>Advocate, Supreme Court of Bangladesh</h4>
                    </div>
                  </div>
                  <div className="HeadRight">
                    <h4>
                      Mr. Shawn S. Novel is a Barrister at Law of England and
                      Wales and licensed to practice in the USA as Attorney at
                      Law admitted in the New York State Bar. He is also an
                      Advocate of the Supreme Court of Bangladesh. His
                      concentration on business law and financial institutions
                      during his LL.M. at Cornell Law School has equipped him
                      with the right set of tools to gain an international
                      perspective of business and the legal conduits essential
                      in addressing clients’ needs. Having practiced as attorney
                      in a New York based law firm and litigated before the
                      Federal Courts, he has gained a deep and thorough
                      understanding of ethics, values and principles of
                      international workplaces and has instilled and
                      incorporated the same in his firm in Bangladesh. Mr. Novel
                      is specialized in international commercial law and
                      cross-border transactions with paramount experience on
                      devising models for entities in setting up ventures across
                      borders. He has worked as a transactional lawyer in
                      Thailand and has structured deals in Southeast Asia having
                      advised clients from Hong Kong and Singapore and
                      understands the regional market. Currently he advises MNCs
                      on investment and corporate strategies in Bangladesh with
                      heavy focus on finance and real estate. Mr. Novel oversees
                      the Corporate, M&A, ADR, Commercial and Litigation wings
                      of the firm personally.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="Section2">
              <div className="SrAssContainer">
                <h1>Senior Associates</h1>
                <div className="SrContents">
                  <SrAssociates/>
                </div>
                
              </div>
            </div>
            <div className="Section3">
              <div className="AssContainer">
                <h1>Associates</h1>
                <div className="AssContents">
                  <Associates/>
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default People;
