import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Groups from "./components/groups/Groups";
import Students from "./components/students/Students";

function App() {
  return (
      <Router>
          <div style={containerStyles}>
        <div>
          <Link style={{paddingRight: '10px'}} to="/home">Home</Link>
          <Link style={{paddingRight: '10px'}} to="/groups">Groups</Link>
          <Link to="/students">Students</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/groups">
              <Groups />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
          </Switch>
        </div>
          </div>
      </Router>

  );
};

const containerStyles = {
    width: '250px',
    padding: '20px',

};

export default App;
