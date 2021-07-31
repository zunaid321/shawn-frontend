import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import Service from "./Service/Service";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import "./Home/home.scss";
import Contact from "./ContactUs/Contact";
import Join from "./JoinUs/Join";
import Clients from "./Clients/Clients";
import People from "./People/People";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return (
    <>
      {!spinner ? (
        <>
          <ToastContainer position="bottom-right" />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service/:id" component={Service} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/contactUs" component={Contact} />
            <Route exact path="/joinUs" component={Join} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/people" component={People} />
          </Switch>
        </>
      ) : (
        <div className="loader">
          <h1>Welcome to Shawn Novel</h1>
        </div>
      )}
    </>
  );
};

export default App;
