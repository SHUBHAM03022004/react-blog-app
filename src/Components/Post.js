import React from "react";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import { leveningStr } from "../helper";

const Post = ({ post, handleBookmark, handleRemoveBookmark }) => {
  const { id, title, body, bookmark } = post;

  // Button styles
  const btnStyle = {
    padding: "8px 16px",
    borderRadius: "5px",
    marginRight: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    border: "1px solid #ccc",
  };

  // Hover styles
  const hoverStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const handleBookmarkClick = () => {
    if (bookmark) {
      handleRemoveBookmark(post);
      alert("Post removed from bookmarks!");
    } else {
      handleBookmark(post);
      alert("Post added to bookmarks!");
    }
  };

  return (
    <div className="post">
      <h3>
        <Link to={`/post/${id}`}>{title}</Link>
      </h3>
      <p>{renderHTML(leveningStr(body, 250))}</p>
      <ul>
        <li>
          <Link to={`/post/${id}`} className="btn btn-more">
            Read More
          </Link>
        </li>
        <li>
          <button
            className={
              bookmark ? "btn btn-remove-bookmarks" : "btn btn-bookmarks"
            }
            style={{
              ...btnStyle,
              ...hoverStyle,
              backgroundColor: bookmark ? "red" : "green",
            }}
            onClick={handleBookmarkClick}
          >
            {bookmark ? "Remove from Bookmark" : "Add to Bookmark"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Post;
