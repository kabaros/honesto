import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ShareFeedback from "./ShareFeedback";
import ViewFeedback from "./ViewFeedback";
import ConfirmationPage from "./FeedbackWizard/ConfirmationPage";
import NoMatch from "./404page";
import WizardContainer from "./FeedbackWizard";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-5">
              <Switch>
                <Route exact path="/">
                  <ShareFeedback />
                </Route>
                <Route path="/view-feedback/:mode/:employeeId?">
                  <ViewFeedback />
                </Route>
                <Route path="/confirmation">
                  <ConfirmationPage />
                </Route>
                <Route path="/share-feedback/employee/:employeeId">
                  <WizardContainer />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </div>
          <div className="alert alert-success mt-5 text-center" role="alert">
            Time spent so far: 12.5h
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
