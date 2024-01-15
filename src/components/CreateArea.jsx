import React, { useState } from "react";

function CreateArea(props) {
  const [content, setContent] = useState({ title: "", note: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    props.handleAdd(content);
    setContent({ title: "", note: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={content.title}
        />
        <textarea
          name="note"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={content.note}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
