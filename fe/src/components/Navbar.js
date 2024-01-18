import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AddNotePage, SeeAllNotesPage, LoginPage, RegisterPage } from '../constants'


function MainNavbar({ user, setPageState, getUserNotes, onLogout }) {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>FileShare</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => { setPageState({ page: AddNotePage }); getUserNotes() }}>Share a file</Nav.Link>
                    <Nav.Link onClick={() => setPageState({ page: SeeAllNotesPage })}>My files</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {user === undefined ? <Nav className="justify-content-end">
                        <Nav.Link onClick={() => setPageState({ page: LoginPage })}>Login</Nav.Link>
                        <Nav.Link onClick={() => setPageState({ page: RegisterPage })}>Register</Nav.Link>
                    </Nav> : <p></p>}
                    {user !== undefined ? <>
                        {/* <Navbar.Text> Signed in as: {user.username} </Navbar.Text> */}
                        <Nav.Link onClick={onLogout}> Logout </Nav.Link>
                        </> : 
                    <p></p>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;