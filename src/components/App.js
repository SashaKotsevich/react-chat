import React from "react";

import { Provider } from "react-redux";
import configureStore from "../store/store";
import history from "../utils/history";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../containers/PrivateRoute";

import ChatPage from "../containers/ChatPage";
import WelcomePage from "../containers/WelcomePage";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <PrivateRoute exact path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
