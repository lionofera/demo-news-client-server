import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image';
import { FaUser } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout()
        .then( () => {})
        .catch( error => console.error(error))
    }
    return (
        <div>
            <Navbar className='mb-4' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to='/'>Demo News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#">{user?.photoURL ?
                                <Image style={{ height: '40px' }} roundedcircle src={user?.photoURL}>

                                </Image>
                                : 
                                <FaUser></FaUser>}
                            </Nav.Link>

                            <Nav.Link href="#link">
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span>{user?.displayName}</span>
                                                <Button onClick={handleLogout}>Logout</Button>
                                            </>
                                            :
                                            <>
                                                <Link to='/login'>Login</Link>
                                                <Link to='/register'>Register</Link>
                                            </>

                                    }
                                </>
                            </Nav.Link>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;