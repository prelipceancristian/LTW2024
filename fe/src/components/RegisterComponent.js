import { Container, Form, Button } from "react-bootstrap";
import { useRef } from "react";
const RegisterComponent = ({ onRegister }) => {

    const userRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleRegister = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        onRegister(user, email, password);
    }

    return <Container>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control htmlFor="username" ref={userRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="success" size="lg" type="submit">
                    Register
                </Button>
            </div>
        </Form>
    </Container>
}

export default RegisterComponent