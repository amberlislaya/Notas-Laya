import React from 'react'
import './noteContainer.css'
import Note from '../Note/Note'


const NoteContainer = (props) => {


const reverArray=(arr)=> {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
        array.push(arr[i])
    }
    return array;
};

const notes = reverArray(props.notes);


  return (

<div className='note-container'>
<h2>Notas</h2>
<div className='note-container-notes custom-scroll'>
{notes?.length > 0 ? (
  notes.map((item) => ( 
    <Note key={item.id} note={item}
  deleteNote={props.deleteNote}
  updateText={props.updateText}
  />
)) 
) : ( 
  <h3>No hay notas existentes</h3>
)}
</div>
</div>
);
}

export default NoteContainer