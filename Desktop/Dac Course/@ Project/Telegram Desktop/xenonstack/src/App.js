// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/contact" component={ContactUs} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;