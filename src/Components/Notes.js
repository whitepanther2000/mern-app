import { React, useContext } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import NoteItem from './NoteItem';


const Notes = () => {

    const context = useContext(noteContext);
    const { notes, setNotes } = context


    return (
        <div>
            <h2>Your Notes</h2>
            <div className="row my-3">
                {notes.map((note) => {
                    return <NoteItem note={note} />
                })}
            </div>

        </div>
    )
}

export default Notes