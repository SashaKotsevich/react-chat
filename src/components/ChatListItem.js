import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import Avatar from "./Avatar";

function ChatsListItem({ chat, index }) {
  return (
    <ListItem key={index} button>
      <Avatar>{chat.title}</Avatar>
      <ListItemText primary={chat.title} />
    </ListItem>
  );
}

export default ChatsListItem;
