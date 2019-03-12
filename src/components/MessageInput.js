import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Paper, Input } from "@material-ui/core";

const styles = theme => ({
  messageInputWrapper: {
    position: "fixed",
    left: "auto",
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    padding: theme.spacing.unit * 3
  },
  messageInput: {
    padding: theme.spacing.unit * 2
  }
});

function MessageInput({ classes }) {
  return (
    <div className={classes.messageInputWrapper}>
      <Paper className={classes.messageInput} elevation={6}>
        <Input fullWidth placeholder="Type your message…" />
      </Paper>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(MessageInput);
