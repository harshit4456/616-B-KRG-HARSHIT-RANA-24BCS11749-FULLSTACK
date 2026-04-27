import React, { useState } from "react";
import "./PostForm.css";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, body };

    try {
      // Simulated POST request (no backend)
      console.log("POST DATA:", data);

      // mimic API delay
      setTimeout(() => {
        setSuccess(true);
        setTitle("");
        setBody("");
      }, 500);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {success && (
        <p className="success">✅ Data submitted successfully!</p>
      )}
    </div>
  );
}

export default PostForm;
