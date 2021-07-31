import React from "react";
import GeneralFooter from "../Components/GeneralFooter";
import "./join.scss";
import { useMediaQuery } from "react-responsive";

const Join = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <div className="joinContainer">
      {/* Top Part */}
      {!isTabletOrMobileDevice ? (
        <div>
          <div className="joinWrapper">
            <div className="Jlabel">
              <h1>Join Us !</h1>
            </div>
          </div>
          {/* Form & Map Part */}
          <div className="qandjCont">
            <div className="qandj">
              {/* Form */}
              
              <div className="left">
                <h4>
                  At Shawn Novel & Associates we believe in developing long-term
                  sustainable careers for the associates. With that goal we
                  recruit only the best and make it our priority to ensure that
                  all associates receive top-notch training and are placed at an
                  exponential career track.
                </h4>
              </div>
              {/* Map */}
              <div className="right">
                <h2>
                  Interested candidates are encouraged to send their CV to
                  <br />
                  admin@shawnnovel.com
                </h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="joinWrapperM"><div className="JlabelM">
              <h4>Join Us !</h4>
            </div></div>
          <div className="qandjM">
            {/* Form */}
            <div className="leftM">
              {" "}
              <h4>
                At Shawn Novel & Associates we believe in developing long-term
                sustainable careers for the associates. With that goal we
                recruit only the best and make it our priority to ensure that
                all associates receive top-notch training and are placed at an
                exponential career track.
              </h4>
            </div>
            {/* Map */}
            <div className="rightM">
              <h2>
                Interested candidates are encouraged to send their CV to
                <br />
                admin@shawnnovel.com
              </h2>
            </div>
          </div>
        </div>
      )}

      <GeneralFooter />
    </div>
  );
};

export default Join;
// import React from "react";
// import GeneralFooter from "../Components/GeneralFooter";
// import "./join.scss";
// import { useMediaQuery } from "react-responsive";

// const Join = () => {
//   const isTabletOrMobileDevice = useMediaQuery({
//     query: "(max-device-width: 1224px)",
//   });

//   return (
//     <>
//       {!isTabletOrMobileDevice ? (
//         <div className="JoinSection">
//           <div className="label">
//               <h1>Join Us !</h1>
//             </div>
//           <div className="JoinContainer">
//             <div className="Join">
//             <div className="left">
//
//             </div>
//             <div className="right">

//             </div>
//             </div></div>
//         </div>
//       ) : (
//         <div className="JoinSectionM">
//           <div className="JoinContainerM">
//             <div className="leftM">

//             </div>
//             <div className="rightM">
//
//             </div>
//           </div>
//         </div>
//       )}
//       <GeneralFooter />
//     </>

//   );
// };

// export default Join;
