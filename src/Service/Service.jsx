import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import "./service.scss";
import { useParams } from "react-router-dom";
import GeneralFooter from "../Components/GeneralFooter";

const Service = () => {
  const { id } = useParams();
  console.log(id);
  const store = useContext(RootStoreContext);
  const { service, loadingService, getService } = store.commonStore;
  useEffect(() => {
    getService(id);
  }, [getService, id]);
  return (
    <>
      {/* <div className="nav"></div> */}
      <div className="serviceContainer">
        {loadingService ? (
          <div className="serviceContent" style={{ textAlign: "center" }}>
            loading
          </div>
        ) : (
          <>
            <div
              className="serviceImage"
              style={{
                backgroundImage: `url(${ service ? service.image : ''})`,
              }}
            ></div>
            <div className="serviceContent">
              <div className="serviceDescription">
                <h1>{service ? service.heading : "None"}</h1>
                <p>{service ? service.type : "None"}</p>
                <p>{service ? service.content : "None"}</p>
              </div>
              <div className="serviceSidebar">
                <div className="forStick">
                  <p className="sidebar-heading">Shawn Novel & Associates</p>
                  <p>260/C Tejgaon I/A</p>
                  <p>Dhaka - 1208 </p>
                  <p>Tel: 02-8878565 </p>
                  <p>admin@shawnnovel.com </p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="forB"></div>
        <GeneralFooter />
      </div>
    </>
  );
};

export default observer(Service);
