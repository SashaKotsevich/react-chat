import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";

import { chats, messages } from "./mock-data";

const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  }
});

function App({ classes }) {
  return (
    <div className={classes.root}>
      <ChatHeader />
      <Sidebar chats={chats} />
      <ChatBody messages={messages} />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App);
