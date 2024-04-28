import React from "react";

import Posts from "./Posts";
import Bookmarks from "./Bookmarks";

export default ({ posts, bookmarks, handleBookmark, handleRemoveBookmark }) => {
  return (
    <div
      className="content-area"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#e9ecef",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="all-posts"
        style={{
          width: "70%",
          marginRight: "20px",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            color: "#333333",
            borderBottom: "2px solid #cccccc",
            paddingBottom: "10px",
          }}
        >
          All Posts
        </h1>
        <Posts
          posts={posts}
          handleBookmark={handleBookmark}
          handleRemoveBookmark={handleRemoveBookmark}
        />
      </div>
      <div
        className="bookmarks-sidebar"
        style={{
          width: "30%",
          background: "#f0f0f0",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            color: "#333333",
            borderBottom: "2px solid #cccccc",
            paddingBottom: "10px",
          }}
        >
          Bookmarks
        </h1>
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
};
