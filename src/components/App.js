import React from "react";

import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ChatPage from "./ChatPage";
import WelcomePage from "../containers/WelcomePage";
import configureStore from "../store/store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <Route exact path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
