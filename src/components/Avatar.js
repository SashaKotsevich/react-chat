import React from "react";

import MUIAvatar from "@material-ui/core/Avatar";
import titleInitialise from "./../utils/title-initials";
import getColor from "./../utils/color-from";

function Avatar({ children, ...rest }) {
  return (
    <MUIAvatar style={{ backgroundColor: getColor(children) }} {...rest}>
      {titleInitialise(children)}
    </MUIAvatar>
  );
}

export default Avatar;
