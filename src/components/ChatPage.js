import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

import { messages } from "./../mock-data";

const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  }
});

class ChatPage extends React.Component {
  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;
    Promise.all([fetchAllChats(), fetchMyChats()]);
  }
  render() {
    const { classes } = this.props;
    const { chats } = this.props;
    return (
      <div className={classes.root}>
        <ChatHeader />
        <Sidebar chats={chats} />
        <ChatBody messages={messages} />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ChatPage);
