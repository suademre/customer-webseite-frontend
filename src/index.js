/*!

=========================================================
* Paper Kit PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages
import LandingPage2 from "views/LandingPage2";
import SignUpPage2 from "views/SignUpPage2";
import AdminView2 from "views/admin/AdminView2";

// others

import store from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import setupAxios from "../src/redux/setupAxios";
import { Provider } from "react-redux";
import MyRequests from "views/user/MyRequests";
import Application from "views/admin/pages/userchoice/Application";
import Webdevelopment from "views/admin/pages/userchoice/Webdevelopment";
import Dataanalyst from "views/admin/pages/userchoice/Dataanalyst";

setupAxios(store);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage2 />
          </Route>
          <Route exact path="/application">
            <Application />
          </Route>
          <Route exact path="/webdevelopment">
            <Webdevelopment />
          </Route>
          <Route exact path="/dataanalyst">
            <Dataanalyst />
          </Route>
          <Route exact path="/myrequests">
            <MyRequests />
          </Route>
          <Route path="/admin">
            <AdminView2 />
          </Route>
          <Route path="/signup">
            <SignUpPage2 />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
