import React from "react";
import "./test.scss";
import Slider from "react-slick";
import SA0 from "./images/NadimSeniorAssociate.jpeg";
import SA1 from "./images/RafidSeniorAssociate.jpeg";

const SrAssociates = () => {
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
              <img src={SA0} />
              <div className="rightCont">
                <h2>Nadim Mohammad Adnan</h2>
                <h4> - LL.B. Hons. (University of London, UK)</h4>
                <p>
                  Mr. Nadim Mohammod Adnan is an LL.B. graduate from University
                  of London. He is a competent associate at Shawn Novel and
                  Associates where he focuses on a variety of legal claims and
                  deals with corporate clients in complex litigation. His
                  proficiency lies mostly within the aspect of company laws,
                  contract drafting and review, real-estate matters, research,
                  analysis and so forth. He is profoundly involved with the
                  matters related to business incorporation and commercial
                  investment. Mr. Nadim handles company stock related matters by
                  acknowledging the client’s specific needs regarding the legal
                  interpretation of the applicable rules and provides legal
                  solutions under enforceable laws of the land and international
                  laws as well. As a corporate lawyer he ensures the legality of
                  commercial transactions and provides advice to the
                  corporations on their legal rights and duties, including the
                  duties and responsibilities of corporate ventures. Thereby his
                  legal practice emphases on venture capital financings, complex
                  commercial transactions and general advisory regarding
                  corporate and financing strategy. He enthusiastically works on
                  various projects of cross-border transactions and setting up
                  joint venture companies in Bangladesh. In addition to the
                  formation of corporate entities and organizing suitable
                  business structures for the clients, he also handles various
                  litigation aspects at Dhaka District Court of Bangladesh. He
                  mostly deals in the legal areas of Negotiable Instruments Act,
                  Specific Relief Act, Labor Laws, Family Suit, Family Laws and
                  so forth. His primary interest mostly lies within the
                  specialized areas of corporate and commercial laws of
                  Bangladesh.
                </p>
              </div>
            </div>
          </div>
          <div className="ItemCont">
            <div className="ItemBox">
              <img src={SA1} />
              <div className="rightCont">
                <h2>Rafid Un Nabi</h2>{" "}
                <h4>LL.B. Hons. (University of London, UK)</h4>
                <h4>Barrister-at-law (Lincoln’s Inn)</h4>
                <h4>Accredited Civil/Commercial Mediator (ADR-ODR Intl)</h4>
                <h4>PGDL (UWE, Bristol, UK)</h4>
                <h4>LL.M. (Northumbria University, UK)</h4>
                <h4>LL.B. Hons. (University of London, UK)</h4>
                <p>
                      Mr. Rafid Un Nabi is a Barrister at Law of England and
                      Wales, having been called as such at The Honourable
                      Society of the Lincoln’s Inn. Having completed the LL.B
                      (Hons) from the University of London, he then went on to
                      undertake his LL.M in International Commercial Law at the
                      University of Northumbria at Newcastle, UK. His
                      dissertation is focused on Shipping Law, exploring the
                      Carrier’s liabilities at sea. He is also an Accredited
                      Civil/Commercial Mediator with the ADR ODR International,
                      UK. Mr. Nabi started his legal profession with Shawn Novel
                      Associates (SNA) back in 2014 when he undertook his
                      mini-pupillage here under the guidance of the Head of
                      Firm, Barrister Shawn Novel. He then continued his journey
                      with SNA as an Associate again in 2015, having just
                      graduated from law school. While he has been on sabbatical
                      in UK on two occasions, he now plays an integral role at
                      SNA. Mr. Nabi specialises in Corporate and Commercial
                      Practice with keen interest in Civil Litigation. He boasts
                      substantial experience relating to Land related matters
                      having undertaken large scale due diligence projects with
                      several Multi-national companies and Audit firms. His
                      expertise in this area has led him to work on contractual
                      basis with other law firms and has been the Legal Advisor
                      to Afser Group Bangladesh since 2016. He provides advices
                      on company law issues, contract drafting and review,
                      real-estate matters, research and analysis at SNA on a
                      regular basis. He has also been involved with matters
                      related to various aspect of business incorporations and
                      commercial investments. Mr. Nabi also has substantial
                      teaching experience under his belt as a Guest Lecturer at
                      the London College of Legal Studies (South). In his free
                      time, he likes to enjoy the company of his friends and
                      sports.
                    </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SrAssociates;
