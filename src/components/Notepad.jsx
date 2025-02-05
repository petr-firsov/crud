import { useState } from "react";
import AddNoteForm from "./AddNoteForm";
import Note from "./Note";
import UpdateButton from "./UpdateButton";

export default function Notepad() {

    const [notes, setNotes] = useState([]);

    function addNote(e) {
        e.preventDefault();
        if (e.target.children[1].value === '') {
            return
        }
        const data = e.target.children[1].value;
        fetch(import.meta.env.VITE_URL, {
            method: "POST",
            body: JSON.stringify({"id": 0, "content": data})
        })
        .then(() =>
            fetch(import.meta.env.VITE_URL)
            .then((response) => response.json())  
            .then((notes) => setNotes(notes))
        );
        e.target.children[1].value = '';
    }

    function removeNote(e) {
        const shownNotes = Array.from(e.target.parentElement.parentElement.children);
        const thisNoteIndex = shownNotes.findIndex(element => {return element === e.target.parentElement});
        let deletedNoteId;
        const updatedNotes = notes.filter((note, index) => {
            if (index === thisNoteIndex) {
                deletedNoteId = note.id;
            }
            return (index != thisNoteIndex)
        });
        setNotes(updatedNotes)
        fetch(`${import.meta.env.VITE_URL}${deletedNoteId}`, {
            method: "DELETE"
        })
        .then(() => 
            (fetch(import.meta.env.VITE_URL)
            .then((response) => response.json())  
            .then((notes) => {
                setNotes(notes);
                console.log(notes) 
            })) 
        );
    }

    function updateNotes() {
        console.log(import.meta.env.VITE_URL)
        fetch(import.meta.env.VITE_URL)
        .then((response) => response.json())
        .then((data) => setNotes(data))
    }

    return (
        <div>
            <UpdateButton 
            updateNotes={updateNotes}/>
                <div className="notes">
                    {notes.map(note => {
                        return (
                            <Note
                            key={note.id}
                            id={note.id}
                            content={note.content}
                            handleClick={removeNote} />
                        )
                    })}
                </div>
            <AddNoteForm 
            handleSubmit={addNote} />
        </div>

    )
}