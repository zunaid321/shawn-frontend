import React from "react";
import "./test.scss";
import Slider from "react-slick";
import A1 from "./images/JoyeeAssociate.jpeg";
import A2 from "./images/AyeshaAssociate.jpeg";
import A3 from "./images/ArmanAssociate.jpeg";
import A4 from "./images/SaifOffCouncel.jpeg";

const Associates = () => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, left: "0",display: "block", background: "#000" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style,display: "block", background: "#000" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  var ASSsettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="SrContainer">
        <Slider {...ASSsettings}>
          <div className="ItemCont">
            <div className="ItemBox">
              <img src={A1} />
              <div className="rightCont">
                <h2>Anupoma Joyeeta Joyee</h2>
                <h4>Barrister-at-law (Lincoln’s Inn)</h4>
                <h4>Accredited Civil/Commercial Mediator (ADR-ODR Intl)</h4>
                <h4>LL.M. BPTC (UWE, Bristol, UK)</h4>
                <h4>LL.B. Hons (University of London, UK)</h4>
                <p>Description Required</p>
              </div>
            </div>
          </div>
          <div className="ItemCont">
            <div className="ItemBox">
              <img src={A2} />
              <div className="rightCont">
                <h2>Ayesha Siddiky</h2> <h4>Barrister-at-Law</h4>
                <h4>LL.B. Hons. (University of London, UK)</h4>
                <h4>LL.M. (University of West England, Bristol, UK)</h4>
                <h4>PGDL (BPP University Law School, UK)</h4>
                <p>
                  Ms. Ayesha Siddiky is a Barrister and has completed her Bar at
                  Law course from BPP University Law School, UK. She is an LL.B
                  graduate under University of London, UK and had pursued her
                  Masters in International Banking and Finance Law from
                  University of West England, Bristol, UK. Her LL.M major core
                  concentrated on various modules of commercial litigation and
                  banking sectors. She started her legal career with Tanjib Alam
                  and Associates gaining experience in various matters of civil
                  litigation and later joined Shawn Novel and Associates. Due to
                  her keen interest to explore and gather experience in the
                  field of corporate law, she specialises mostly in the legal
                  aspects of real estate matters, commercial issues, contract
                  drafting and review, legal research, analysis and henceforth.
                  She has gathered further knowledge in the field of finance and
                  banking matters and is able to acknowledge the legal issues by
                  interpreting the individual matters, applying the enforceable
                  banking laws and principles of Bangladesh. She has also been
                  involved in matters related to various aspects of civil and
                  commercial disputes, business incorporations, joint ventures
                  and so on. Apart from this, she works as a part time lecturer
                  in Cambridge Business and Law Academy and has substantial
                  experience in the field of teaching as well.
                </p>
              </div>
            </div>
          </div>
          <div className="ItemCont">
            <div className="ItemBox">
              <img src={A3} />
              <div className="rightCont">
                <h2>Arman Arif</h2>
                <h4>Credentials Required</h4>
                
                <p>
                  Description Required
                </p>
              </div>
            </div>
          </div>
          </Slider>
      </div>
    </>
  );
};

export default Associates;
