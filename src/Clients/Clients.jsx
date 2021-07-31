import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import GeneralFooter from "../Components/GeneralFooter";
import "./clients.scss";
const Clients = () => {

  const store = useContext(RootStoreContext);
  const { clients, getClients, loadingClients } = store.commonStore;
  useEffect(() => {
    getClients()
  }, [getClients])

  return (
    <div className="clientContainer">
      <div className="clientWrapper">
        <h2>Our Clients</h2>
      </div>
      <div className="itemWrapper">
        {loadingClients ? 
          <div> loading</div>
         : 
          <>
            {clients.length != 0 ? (
              clients.map((item, index) => {
                return <div key={index} >
                  <img src={item.logo}/>
                </div>
              })
            ) : 
              <div style={{height:"100px", width:"100px"}}> Nothing to display</div>
            }
          </>
        }
      </div>
      <GeneralFooter/>
    </div>
  );
};

export default observer(Clients);
