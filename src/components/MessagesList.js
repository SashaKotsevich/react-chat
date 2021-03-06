import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Message from "./Message";

const styles = theme => ({
  messagesWrapper: {
    overflowX: "scroll",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: "120px"
  }
});

class MessageList extends React.Component {
  messageWrapper = React.createRef();

  componentDidMount() {
    setTimeout(this.ScrollDownHistory, 0);
  }

  componentDidUpdate() {
    setTimeout(this.ScrollDownHistory, 0);
  }

  ScrollDownHistory = () => {
    this.messageWrapper.current.scrollTop = this.messageWrapper.current.scrollHeight;
  };
  render() {
    const { classes, messages } = this.props;
    return (
      <div className={classes.messagesWrapper} ref={this.messageWrapper}>
        {messages &&
          messages.map((message, index) => {
            return <Message {...message} messageIndex={index} />;
          })}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MessageList);
