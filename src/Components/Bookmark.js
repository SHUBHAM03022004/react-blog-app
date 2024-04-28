import React from "react";
import Bookmarks from "./Bookmarks";

export default ({ bookmarks }) => {
  return (
    <div className="wrapper" style={styles.wrapper}>
      <div className="content" style={styles.content}>
        <div className="bookmark-page" style={styles.container}>
          <h1 style={styles.heading}>Your Bookmarks</h1>
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </div>
      <footer style={styles.footer}></footer>
    </div>
  );
};

const styles = {
  // Existing styles
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
  },
  content: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRadius: "5px",
    margin: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    marginTop: "auto",
    boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  // Additional styles
  link: {
    textDecoration: "none",
    color: "#0066cc",
    marginLeft: "10px",
  },
  button: {
    backgroundColor: "#0066cc",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};
