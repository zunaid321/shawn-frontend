import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import "./homeService.scss";
import { observer } from "mobx-react-lite";
import { Shuffle } from "../Components/ShuffleServiceItem";
import "../Components/serviceDropdown.scss";
import { Route, Switch, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Service from "../Service/Service";

function HomeService() {
  const store = useContext(RootStoreContext);
  const { setDropdown, dropdown } = store.navStore;
  const history = useHistory();
  const settings = {
    // dots: true,
    // infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    speed: 3000,
    arrows: false,
    // pauseOnHover: true,
  };const settingsM = {
    // dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,  

    autoplay: true,
    speed: 3000,
    arrows: false,
    // pauseOnHover: true,
  };
  const [placeHolder, setPH] = useState(false);
  const handleHover = () => {
    setPH(true);
  };
  const handleHoverClose = () => {
    setPH(false);
  };
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleGoToService = (item) => {
    console.log(item);
    if (item.subTitle === "Angel Investment") {
      console.log("going");
      history.push("/service/2");
    }
  };
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="homeServiceContainer">
          <div
            className="serviceLabel"
            onMouseOver={handleHover}
            onMouseLeave={handleHoverClose}
            onClick={handleClick}
          >
            {placeHolder && (
              <div className="placeHolderService">
                <h6>Click to open/close</h6>
              </div>
            )}
            <h1>Services at a Glance</h1>
          </div>
          <div>
            <Slider className="homeServiceSlider" {...settings}>
              {Shuffle.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="homeServiceItem"
                    onClick={() => {
                      handleGoToService(item);
                    }}
                  >
                    <h4>{item.subTitle}</h4>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      ) : (
        <div className="homeServiceContainerM">
          <div
            className="serviceLabelM"
            onMouseOver={handleHover}
            onMouseLeave={handleHoverClose}
            onClick={handleClick}
          >
            {placeHolder && (
              <div className="placeHolderService">
                <h6>Click to open/close</h6>
              </div>
            )}
            <h1>Services at a Glance</h1>
          </div>
          <div>
            <Slider className="homeServiceSliderM" {...settingsM}>
              {Shuffle.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="homeServiceItemM"
                    onClick={() => {
                      handleGoToService(item);
                    }}
                  >
                    <h4>{item.subTitle}</h4>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default observer(HomeService);
