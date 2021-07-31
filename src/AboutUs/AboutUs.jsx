import { observer } from "mobx-react-lite";
import React from "react";
import "./aboutUs.scss";
import aboutImg from "./about.jpeg";
import Navbar from "../Components/Navbar";
import GeneralFooter from "../Components/GeneralFooter";
const AboutUs = () => {
  return (
    <>
      {/* <div className="nav"></div> */}
      <div className="aboutUsContainer">
        <div
          className="aboutUsImage"
          style={{ backgroundImage: `url(${aboutImg})` }}
        ></div>
        <div className="aboutUsContent">
          <div className="aboutUsDescription">
            <h1>About Us</h1>
            {/* <img src={aboutImg} /> */}
            <p>
              <span className="sidebar-heading">Shawn Novel & Associates</span>{" "}
              is a reputed law firm committed to providing excellent quality
              legal services to its clients. At our firm, we understand the
              needs of our clients and value them in the highest priority. Our
              expertise and experience are devoted to prompt delivery of
              professional legal services to our clients. We strive and ensure
              to protect and safeguard our clients’ interests through preventive
              measures. By the same taken whenever needed, we are equally
              determined in adopting corrective measure for our clients to
              recover in cagey and volatile markets. With high level of
              standard, expertise, commitment and determination, we maintain an
              upfront position in representing clients in the national and
              international arena. We believe in leadership, creativity and
              extraordinary client service, and have developed teams of
              specialized lawyers to provide expert legal advice and
              representation to all our clients.
            </p>
            <p>
              Since its establishment, the firm has represented its corporate
              clients from incorporation to their pertinent legal matters,
              advising and addressing issues on company structure and
              shareholder’s rights, rectification of share registers and
              liquidation. We have successfully represented clients before Court
              on commercial issues, corporate and banking matters involving
              cheque fraud and contract enforcement. We are experienced in
              advising clients on laws and regulations pertaining to compliance.
            </p>
            <p>
              We represent and advise foreign corporations in government
              procurement contracts and projects. We advise companies in major
              industrial level point joint ventures and regularly advise, draft
              and carry out due diligence on employment issues in light of the
              prevailing labor laws and their subsequent amendments. Clients
              seek our advice in matters of securities and derivatives and
              compliance with SEC laws. We dispense legal opinions in areas of
              acquisition finance, asset finance, the global capital markets,
              Islamic finance, project finance, real estate finance,
              restructuring and insolvency and trade, commodity and export
              finance.
            </p>
            <p>
              In the context of property law we ensure to advise objectively and
              reasonably with primary focus on the rights and obligations of our
              clients. We are experienced in drafting pari passu and
              hypothecation agreements. Our firm in conjunction and addition to
              the above-mentioned is specialized in representing clients in the
              real estate sector. Our responsibilities include, amongst others,
              due diligence on property’s title, ownership and third party
              encumbrances, vetting, conveyance and registration. We are
              equipped to offer full range of legal services to life and general
              insurance companies and represent them in litigation, ADR,
              arbitration and settlements. In addition our corporate team
              advises insurance companies on internal corporate decision making
              and compliance.
            </p>
            <p>
              We are very much aware as to the growing number of disputes in the
              admiralty and the maritime arena by reason of Bangladesh Sea ports
              emerging as an important harbor in International Trade. We are
              well equipped to advise the clients in matters of admiralty and
              maritime law and have the requisite experience in handling cases
              of such nature. We are specialized in dealing with claims arising
              in conjunction and addition to the admiralty and maritime sectors
              extending to marine insurance. In cases of dispute and / or
              interpretation of clauses, we encourage and facilitate speedy and
              amicable settlements by means of ADR like negotiation, mediation
              and arbitration. Our dispute resolution specialists offer advice
              that is timely, commercially focused and sensitive to corporate
              risks. Our teams of litigators are well versed in different
              branches of constitutional, civil, criminal and administrative
              law.
            </p>
          </div>
          <div className="aboutUsSidebar">
            <div className="forStick">
              <p className="sidebar-heading">Shawn Novel & Associates</p>
              <p>260/C Tejgaon I/A</p>
              <p>Dhaka - 1208 </p>
              <p>Tel: 02-8878565 </p>
              <p>admin@shawnnovel.com </p>
            </div>
          </div>
        </div>
        <div className="forB"></div>
        <GeneralFooter />
      </div>
    </>
  );
};

export default observer(AboutUs);
