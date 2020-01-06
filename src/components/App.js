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
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
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
          </div>
        </div>
        <footer className="bg-dark navbar-dark fixed-bottom ">
          <p className="muted text-right text-light p-2">
            Time spent so far: 1h
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
