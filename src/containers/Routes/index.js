import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicNavbar from "../../components/Navbar/PublicNavbar";
import FeedPage from "../FeedPage";
import HomePage from "../HomePage";

const Routes = () => {
  return (
    <>
      <PublicNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feed" component={FeedPage} />
      </Switch>
    </>
  );
};
export default Routes;
