import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#212121",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #ccc",
    fontSize: "14px",

    width: "100%",
    transition: "position 0.3s ease",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const liStyle = {
    display: "inline-block",
    marginRight: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottom: "2px solid transparent",
    paddingBottom: "5px",
    transition:
      "border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out", // Updated transition timing
  };

  const copyrightStyle = {
    marginTop: "20px",
    fontSize: "12px",
    color: "#aaa",
  };

  const hoverStyles = {
    li: {
      cursor: "pointer",
    },
    love: {
      textDecoration: "underline",
    },
  };

  const handleHover = (e) => {
    e.target.style.backgroundColor = "#333";
    e.target.style.borderColor = "#e91e63";
    e.target.style.transform = "scale(1.05)";
    e.target.style.transitionDuration = "0.3s"; // Apply transition on hover
  };

  const handleLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.borderColor = "transparent";
    e.target.style.transform = "scale(1)";
    e.target.style.transitionDuration = "0.3s"; // Apply transition on leave
  };

  return (
    <footer style={footerStyle}>
      <div className="footer">
        <ul style={listStyle}>
          <li
            style={{ ...liStyle, ...hoverStyles.li }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <a href="https://react.dev/">React JS</a>
          </li>
          <li
            style={{ ...liStyle, ...hoverStyles.li }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <a href="https://reactrouter.com/">React Router</a>
          </li>
          <li
            style={{ ...liStyle, ...hoverStyles.li }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <a href="https://draftjs.org/">Draft JS</a>
          </li>
          <li
            style={{ ...liStyle, ...hoverStyles.li }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <a href="#">Shubham Senapati</a>
          </li>
        </ul>
        <div style={copyrightStyle}>
          &copy; {new Date().getFullYear()} Blog . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
