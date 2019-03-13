import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    position: "fixed",
    width: `calc(100% - 320px)`
  }
});

function ChatHeader({ classes }) {
  return (
    <AppBar color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          React Chat
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(ChatHeader);
