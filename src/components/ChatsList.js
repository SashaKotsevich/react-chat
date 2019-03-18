import React from "react";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import ChatsListItem from "./ChatListItem";

const styles = theme => ({
  chatsList: {
    height: "calc(100% - 56px)",
    overflowY: "scroll"
  }
});
function ChatsList({ chats, classes }) {
  return (
    <List className={classes.chatsList}>
      {chats.map(chat => (
        <ChatsListItem chat={chat} key={chat._id} />
      ))}
    </List>
  );
}

export default withStyles(styles)(ChatsList);
