import React from "react";
import "./Post.css";
import { IconButton } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

function Post() {
  return (
    <div className="post">
      {/* avatar + username + moreHoriz*/}
      <div className="post_header">
        <div className="post_header_about">
          <IconButton>
            <PersonOutlineIcon fontSize="medium" />
          </IconButton>
          <h4>Username</h4>
        </div>
        <div className="post_header_more">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {/* image */}
      <div className="post_image">
        <img
          src="https://cdn.auth0.com/blog/illustrations/reactjs.png"
          alt=""
        />
      </div>
      {/* like + comment + share + turnedIn */}
      <div className="post_footer">
        <div className="post_footer_status">
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
        <div className="post_footer_save">
          <IconButton>
            <TurnedInNotIcon />
          </IconButton>
        </div>
      </div>
      {/* username + caption */}
      <div className="post_caption">
        <p>
          <strong>Username </strong>This is my first post
        </p>
      </div>
      <hr style={{ color: "lightgray", margin: "0 5px" }} />
      <div className="post_addComment">
        <form action="" className="post_comment">
          <input type="text" placeholder="Add a comment..." />
          <button className="post_addComment_button">Post</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
