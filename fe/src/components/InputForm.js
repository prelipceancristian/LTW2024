import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

const InputForm = ({ onFileCreate }) => {

    const contentRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = contentRef.current.value;
        console.log(content);
        onFileCreate(content);
    }

    return (
        <Container className="p-3">
            <div className="jumbotron">
                <h1 className="header">Share a file</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>File content</Form.Label>
                        <Form.Control as="textarea" rows={20} ref={contentRef} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default InputForm;