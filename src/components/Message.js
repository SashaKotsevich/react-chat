import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import titleInitialise from "./../utils/title-initials";

const styles = theme => ({
  messageWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  messageWrappperFromMe: {
    justifyContent: "flex-end"
  },
  message: {
    maxWidth: "70%",
    minWidth: "10%",
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: "#e6dcff"
  }
});

function Message({ classes, messageItem, isMessageFromMe, messageIndex }) {
  const userAvatar = <Avatar>{titleInitialise(messageItem.sender)}</Avatar>;
  return (
    <div
      key={messageIndex}
      className={classNames(
        classes.messageWrapper,
        isMessageFromMe && classes.messageWrappperFromMe
      )}
    >
      {!isMessageFromMe && userAvatar}
      <Paper
        className={classNames(
          classes.message,
          isMessageFromMe && classes.messageFromMe
        )}
      >
        <Typography variant="caption">{messageItem.sender}</Typography>
        <Typography variant="body1">{messageItem.content}</Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Message);
