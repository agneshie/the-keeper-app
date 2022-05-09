import {useState} from 'react';

import './CreateArea.styles.scss';

import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea({ onAdd }) {
  
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(true);
  }

  const handleChange = (event) => {
    const { name, value } = event.target; 
    
    setInputNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  const submitNote = (event) => {
    onAdd(inputNote);
    setInputNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return(
    <div>
      <form className="create-note">
        {
          isExpanded && (
            <input n
              name="title"
              value={inputNote.title} 
              placeholder="Title" 
              onChange={handleChange}
            />
          )
        }
        <textarea 
          name="content" 
          value={inputNote.content}
          placeholder="Take a note..." 
          rows={isExpanded ? "3" : "1"} 
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;