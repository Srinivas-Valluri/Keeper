import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(content) {
    setNotes((prev) => [...prev, content]);
  }

  function handleDelete(id) {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleAdd={(content) => {
          addNote(content);
        }}
      />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.note}
            deleteNote={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
