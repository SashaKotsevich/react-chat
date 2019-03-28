import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  TextField
} from "@material-ui/core";

import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";

import ChatsList from "./ChatsList";
import AddButton from "./AddButton";

let styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: 320
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  }
});

function Sidebar({ classes, chats }) {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <TextField fullWidth margin="normal" placeholder="Search chats..." />
      </div>
      <Divider />
      <ChatsList chats={chats} />
      <AddButton />
      <BottomNavigation showLabels>
        <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      </BottomNavigation>
    </Drawer>
  );
}

export default withStyles(styles, { withTheme: true })(Sidebar);
