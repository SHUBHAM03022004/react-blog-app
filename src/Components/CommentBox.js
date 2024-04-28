// // CommentBox.js

// import React, { useState } from "react";

// const CommentBox = ({ handleCommentSubmit, comments }) => {
//   const [comment, setComment] = useState("");

//   const handleChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleCommentSubmit(comment);
//     setComment(""); // Clear the input after submitting
//   };

//   return (
//     <div className="comment-box">
//       <h3 style={{ marginBottom: "1rem" }}>Add a Comment</h3>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
//         <textarea
//           value={comment}
//           onChange={handleChange}
//           placeholder="Write your comment here..."
//           rows={4}
//           cols={50}
//           style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "0.5rem 1rem",
//             backgroundColor: "#3498db",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Submit
//         </button>
//       </form>
//       <div className="comments-container">
//         <h4 style={{ marginBottom: "0.5rem" }}>Comments:</h4>
//         {comments.map((comment, index) => (
//           <div key={index} style={{ marginBottom: "0.5rem" }}>
//             {comment}
//           </div>
//         ))}
//         {comments.length === 0 && (
//           <div style={{ fontStyle: "italic" }}>No comments yet.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentBox;
