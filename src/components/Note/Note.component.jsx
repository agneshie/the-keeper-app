import './Note.styles.scss';

import DeleteIcon from '@mui/icons-material/Delete';

function Note({ id, title, content, onDelete }) {
  return(
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => {
        onDelete(id)
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;