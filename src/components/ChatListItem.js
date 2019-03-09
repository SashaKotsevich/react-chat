import React from "react";
import { ListItem, Avatar, ListItemText } from "@material-ui/core";
import titleInitialise from "./../utils/title-initials";

function ChatsListItem({ chat, index }) {
  return (
    <ListItem key={index} button>
      <Avatar>{titleInitialise(chat.title)}</Avatar>
      <ListItemText primary={chat.title} />
    </ListItem>
  );
}

export default ChatsListItem;
