import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ShareFeedback from "./ShareFeedback";
import ViewFeedback from "./ViewFeedback";
import NoMatch from "./404page";
function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <ShareFeedback />
          </Route>
          <Route path="/view-feedback/:mode">
            <ViewFeedback />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
