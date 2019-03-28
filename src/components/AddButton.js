import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  newChatButton: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48 // + bottom navigation
  }
});

function AddButton({ classes }) {
  return (
    <Fab color="primary" className={classes.newChatButton}>
      <AddIcon />
    </Fab>
  );
}

export default withStyles(styles, { withTheme: true })(AddButton);
