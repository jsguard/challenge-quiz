import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from './../../stores';
import * as routes from "../../constants/routes";
import QuizPage from "../Pages/QuizPage";
import "./App.scss";

class App extends Component {
  render() {
    
    const QuizPageAugmented = () => (
        <QuizPage />
    );

    return (
      <ConnectedRouter history={history}>
        <div className="app">
          <Switch>
            <Redirect exact from="/" to={routes.QUIZ_PAGE} />  
          </Switch>
          <Route exact path={routes.QUIZ_PAGE} component={QuizPageAugmented} />
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
