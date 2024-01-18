import { Container } from "react-bootstrap"
import NoteCard from "./NoteCard"


const Notes = ({ notes, onFileGet }) => {
    const colStyle = {
        display: 'flex', // Adjust the value as needed
        flexWrap: 'wrap',
        gap: '20px'
    };

    return <Container>
        <h3>My files</h3>
        {/* <div style={colStyle}>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
        </div> */}
        <div style={colStyle}>
            {notes.map(n => <NoteCard key={n.noteData.noteId} note={n} onFileGet={onFileGet}></NoteCard>)}
        </div>

    </Container>
}

export default Notes