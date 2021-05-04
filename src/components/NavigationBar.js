import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'



// add random

const NavigationBar = () => {

    const userState = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const onSignIn = (e) => {
        e.preventDefault();
        dispatch({ type: "SIGN_IN", payload: { email } });
    };

    const onSignOut = (e) => {
        e.preventDefault();
        dispatch({ type: "SIGN_OUT" });
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Coder Count</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    {userState.email ? (
                        <Form inline onSubmit={onSignOut}>
                            {userState.email}
                            < Button
                                variant="outline-danger"
                                onClick={onSignOut}
                            >
                                Sign Out
                            </Button>
                        </Form>
                    ) : (
                        <Form inline onSubmit={onSignIn}>
                            <FormControl
                                type="text"
                                placeholder="Email"
                                className="mr-sm-2"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <Button
                                type="submit"
                                variant="outline-success"
                                onClick={onSignIn}
                            >
                                Sign In
                            </Button>

                        </Form>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
