import React from "react";
import renderHTML from "react-render-html";
import CommentBox from "./CommentBox";

export default ({
  match: {
    params: { id },
  },
  history,
  posts,
  handleBookmark,
  handleRemoveBookmark,
  handleRemove,
}) => {
  let post = posts.filter((post) => post.id === id);
  post = post[0];

  const styles = {
    header: {
      fontSize: "2rem", // Example font size
      fontWeight: "bold", // Example font weight
      marginBottom: "1rem", // Example margin bottom
      color: "#333", // Example text color
      textTransform: "uppercase", // Example text transformation
    },
    body: {
      lineHeight: "1.5", // Example line height
      color: "#555", // Example text color
    },
    buttonContainer: {
      display: "flex", // Set the button container to flex to control spacing
      gap: "1rem", // Example gap between buttons
    },
    button: {
      padding: "0.75rem 1.5rem", // Adjusted padding for medium-sized buttons
      borderRadius: "5px", // Example border radius for buttons
      cursor: "pointer", // Example cursor style for buttons
      transition: "background-color 0.3s, box-shadow 0.3s", // Example transition for smoother hover effect
    },
    btnBookmark: {
      backgroundColor: "#3498db", // Updated background color for bookmark button
      color: "#fff", // Updated text color for bookmark button
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Updated box shadow for bookmark button
    },
    btnRemove: {
      backgroundColor: "#e74c3c", // Updated background color for remove button
      color: "#fff", // Updated text color for remove button
      border: "none", // Example border style for remove button
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Updated box shadow for remove button
    },
  };

  return (
    <div className="single-post">
      <h1 className="header" style={styles.header}>
        {post.title}
      </h1>
      {renderHTML(post.body)}
      <div style={styles.buttonContainer}>
        {post.bookmark ? (
          <button
            style={{ ...styles.button, ...styles.btnRemove }}
            onClick={() => handleRemoveBookmark(post)}
          >
            Remove from Bookmark
          </button>
        ) : (
          <button
            style={{ ...styles.button, ...styles.btnBookmark }}
            onClick={() => handleBookmark(post)}
          >
            Add to Bookmark
          </button>
        )}
        <button
          style={{ ...styles.button, ...styles.btnRemove }}
          onClick={() => handleRemove(post, history)}
        >
          Remove
        </button>
      </div>
      {/* Add the CommentBox component */}
      {/* <CommentBox handleCommentSubmit={handleCommentSubmit} /> */}
    </div>
  );
};
