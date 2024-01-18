import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

function convertUtcToReadable(utcTimeString) {
    // Create a Date object from the UTC time string
    const utcDate = new Date(utcTimeString);

    // Convert UTC time to a readable format
    const readableFormat = utcDate.toLocaleString(); // Adjust options as needed

    return readableFormat;
}

const NoteCard = ({ note, onFileGet }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./placeholder.jpg" />
            <Card.Body>
                <Card.Title>Note created by {note.noteData.userId}</Card.Title>
                <Card.Text>
                    Last time updated: {convertUtcToReadable(note.noteData.lastUpdated)}
                </Card.Text>
                <Button variant="primary" onClick={() => { onFileGet(note.noteData.noteId) }}>See note</Button>
            </Card.Body>
        </Card>
    );
}

export default NoteCard;