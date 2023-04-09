import './header.css';

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function Header() {

    const handleClickScroll = () => {
        const element = document.getElementById('booking-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      
    const scrollToAbout = () => {
        const element = document.getElementById('about-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="d-flex bg-dark justify-content-between">
            <div className="col-md-8  text-white pt-3">
                {/* <span className='ml-4'>NAME</span> */}
            <Navbar.Brand href="/"><span className='header-title'>INICIO</span></Navbar.Brand>
            </div>
            <div className="col-md-auto">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link onClick={scrollToAbout}>ABOUT</Nav.Link>
                            <NavDropdown title="ROOMS" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/luxury">LUXURY ROOMS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/family">FAMILY ROOMS</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/events">EVENTS/CONFERENCES</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={handleClickScroll}>BOOKING</Nav.Link>
                            <Nav.Link href="#contact">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;

