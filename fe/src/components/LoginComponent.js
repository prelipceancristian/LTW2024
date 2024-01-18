import { Container, Form, Button } from "react-bootstrap";
import { useRef } from "react";

const LoginComponent = ({ onLogin }) => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        onLogin(email, password);
    }

    return <Container>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="success" size="lg" type="submit">
                    Login
                </Button>
            </div>
        </Form>
    </Container>
}

export default LoginComponent