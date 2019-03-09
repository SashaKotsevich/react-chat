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
      {chats.map((chat, index) => (
        <ChatsListItem chat={chat} index={index} />
      ))}
    </List>
  );
}

export default withStyles(styles, { withTheme: true })(ChatsList);
