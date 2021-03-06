import React from "react";
import { IconButton } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Post() {
  return (
    <div className="post">
      {/* avatar + username + moreHoriz*/}
      <div className="post_header">
        <IconButton>
          <PersonOutlineIcon fontSize="medium" />
        </IconButton>
      </div>
      {/* image */}
      {/* like + comment + share + turnedIn */}
      {/* username + caption */}
    </div>
  );
}

export default Post;
