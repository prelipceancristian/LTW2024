import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

import { countLines } from '../constants';

function convertUtcToReadable(utcTimeString) {
    // Create a Date object from the UTC time string
    const utcDate = new Date(utcTimeString);

    // Convert UTC time to a readable format
    const readableFormat = utcDate.toLocaleString(); // Adjust options as needed

    return readableFormat;
}

const NoteDisplay = ({ note }) => {
    return <Container className="p-3">
        <h3 className="header">File content</h3>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>File details</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        <ListGroup.Item>Note id: {note.noteData.noteId}</ListGroup.Item>
                        <ListGroup.Item>Author id: {note.noteData.userId}</ListGroup.Item>
                        <ListGroup.Item>Last updated: {convertUtcToReadable(note.noteData.lastUpdated)}</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={countLines(note.noteContent)} value={note.noteContent} readOnly={true} />
            </Form.Group>
        </Form>
    </Container>
}

export default NoteDisplay;