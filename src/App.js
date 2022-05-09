import {useState} from 'react';

import './App.css';

import Header from './components/Header/Header.component';
import CreateArea from './components/CreateArea/CreateArea.component';
import Note from './components/Note/Note.component';
import Footer from './components/Footer/Footer.component';


function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    if(newNote.title !== "" || newNote.content !== ""){
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((note, index) => {
          return(
            <Note 
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })
      }
      <Footer />
    </div>
  );
}

export default App;
