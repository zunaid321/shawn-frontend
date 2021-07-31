import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import "./news.scss";
import { useParams } from "react-router-dom";
import GeneralFooter from "../Components/GeneralFooter";

const News = () => {
  const { id } = useParams();
  console.log(id);
  const store = useContext(RootStoreContext);
  const { news, loadingNews, getNews } = store.commonStore;
  useEffect(() => {
    getNews(id);
  }, [getNews, id]);
  return (
    <>
      {/* <div className="nav"></div> */}
      <div className="newsContainer">
        {loadingNews ? (
          <div className="newsContent" style={{ textAlign: "center" }}>
            loading
          </div>
        ) : (
          <>
            <div
              className="newsImage"
              style={{
                backgroundImage: `url(${ news ? news.image : ''})`,
              }}
            ></div>
            <div className="newsContent">
              <div className="newsDescription">
                <h1>{news ? news.heading : "None"}</h1>
                <p>{news ? news.content : "None"}</p>
              </div>
              <div className="newsSidebar">
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

export default observer(News);
