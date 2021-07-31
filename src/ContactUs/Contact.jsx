import React from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GeneralFooter from "../Components/GeneralFooter";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_u0twgpe",
        e.target,
        "user_EGSxhzHwGHgwlwdaR7ySF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <div className="contactContainer">
      {/* Top Part */}
      {!isTabletOrMobileDevice ? (
        <div>
          <div className="consultWrapper">
            <div className="label">
              <h1>Consult with a Lawyer</h1>
            </div>
          </div>
          {/* Form & Map Part */}
          <div className="fandmCont">
            <div className="fandm">
              {/* Form */}
              <div className="forCForm">
                <div className="contactInfo">
                  <h3 style={{ fontFamily: "roboto" }}>
                    <span>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>{" "}
                    (88) 028878565, (88) 01615555687
                  </h3>

                  <h3>
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>{" "}
                    admin@shawnnovel.com
                  </h3>
                </div>
                <form className="CForm" onSubmit={sendEmail}>
                  <h4>Or, get in touch by filling out the contact form</h4>
                  <div className="forAlign1"></div>
                  <div className="forAlign">
                    <h3>Email</h3>
                    <input
                      type="text"
                      name="user_email"
                      placeholder="Email"
                      // {...register("user_email", {
                      //   required: true,
                      //   pattern: /^\S+@\S+$/i,
                      // })}
                    />
                  </div>
                  <div className="forAlign">
                    <h3>Message</h3>
                    <textarea
                      name="message"
                      // {...register("message", { required: true, maxLength: 21 })}
                    />
                  </div>
                  <div className="ContactSubmit">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
              {/* Map */}
              <div className="forCMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.3776421428825!2d90.402325!3d23.769563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8671c44991ec9a40!2sShawn%20Novel%20%26%20Associates!5e0!3m2!1sen!2sbd!4v1625753876064!5m2!1sen!2sbd"
                  style={{ border: "0", width: "100%", height: "100%" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="consultWrapperM"><div className="labelM">
              <h4>Consult with a Lawyer</h4>
            </div></div>
          <div className="fandmM">
            {/* Form */}
            <div className="forCFormM">
              <div className="forBg">
                <form className="CFormM" onSubmit={sendEmail}>
                  <div className="contactInfoM">
                    <h3 style={{ fontFamily: "roboto" }}>
                      <span>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </span>{" "}
                      (88) 028878565, (88) 01615555687
                    </h3>

                    <h3>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>{" "}
                      admin@shawnnovel.com
                    </h3>
                  </div>
                  <h4>Or, get in touch by filling out the contact form</h4>

                  <div className="forAlignM">
                    <h3>Email</h3>
                    <input
                      type="text"
                      name="user_email"
                      placeholder="Email"
                      // {...register("user_email", {
                      //   required: true,
                      //   pattern: /^\S+@\S+$/i,
                      // })}
                    />
                  </div>

                  <div className="forAlignM">
                    <h3>Message</h3>
                    <textarea
                      name="message"
                      // {...register("message", { required: true, maxLength: 21 })}
                    />
                  </div>

                  <div className="ContactSubmit">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
            {/* Map */}
            <div className="forCMapM">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.3776421428825!2d90.402325!3d23.769563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8671c44991ec9a40!2sShawn%20Novel%20%26%20Associates!5e0!3m2!1sen!2sbd!4v1625753876064!5m2!1sen!2sbd"
                style={{ border: "0", width: "100%", height: "100%" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <GeneralFooter />
    </div>
  );
};

export default Contact;
