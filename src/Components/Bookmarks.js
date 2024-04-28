import React from "react";
import { Link } from "react-router-dom";
import { leveningStr } from "../helper";

export default ({ bookmarks }) => {
  const { length } = bookmarks;

  // Define styles for different elements
  const bookmarkStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  };

  const numberStyle = {
    marginRight: "10px",
    fontWeight: "bold",
    color: "#00000", // New style: change number color
  };

  const titleStyle = {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#007bff", // New style: change title color
    textDecoration: "none", // New style: remove underline from link
  };

  const bodyStyle = {
    fontSize: "14px",
    color: "#555", // New style: change body text color
  };

  const showPost =
    length > 0 ? (
      bookmarks.map(({ id, title, body }, index) => (
        <div key={id} className="bookmark" style={bookmarkStyle}>
          <h5 style={titleStyle}>
            <Link to={`/post/${id}`} style={titleStyle}>
              {title}
            </Link>
          </h5>
          <p style={bodyStyle}>{leveningStr(body, 35)}</p>
        </div>
      ))
    ) : (
      <p>No Bookmark Found</p>
    );

  return <div>{showPost}</div>;
};
