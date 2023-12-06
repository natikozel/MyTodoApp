import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
                       notes,
                       handleAddNote,
                       handleDeleteNote,
                   }: any): any => {
    return (
        <div className='notes-list'>
            {notes.map((note: any) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;