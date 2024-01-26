import React from 'react';
import HobbyCueLogo from '../assets/HobbyCueLogo.png';
import './NavbarStyle.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { GoSearch } from 'react-icons/go'; 
import { FaCompass } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaBookmark, FaBell } from "react-icons/fa6";
import { BsFillCartFill } from "react-icons/bs";


export default function NavbarComp() {
  return (
    <>
      <Navbar className='navbar navbar-light shadow-sm px-5  mb-5 d-flex justify-content-between align-middle' expand="lg">
        <a href='#' className='navbar-brand mb-0 h1'>
          <img src={HobbyCueLogo} alt="HobbyCue Logo" className="navbarLogo" />
        </a>
        <SearchBar />

        <div className='collapse navbar-collapse'>
  <DropDown/>
  
        <div className='horizontalFlex item'>
             <FaCompass color='#8064A2' />
                <h6>Explore</h6>
                <IoIosArrowDown />
             </div >
             <div className='horizontalFlex item'>
                <MdStars color='#8064A2' />
                <h6>Hobbies</h6>
                <IoIosArrowDown />
             </div>
             <FaBookmark color='#8064A2' />
             <BsFillCartFill color='#8064A2' />
             <FaBell color='#8064A2' />
             <button type="button"
             class="btn btn-white rounded-2 px-4 py-2"
             style={{border: '1px solid #8064A2', color:'#8064A2' }}
             >
                <h6>Sign In</h6>
             </button>
           
        </div>
              </Navbar>
    </>
  );
}
const DropDown = () => {
  return(
  <div class="collapse navbar-collapse mx-0 px-0" id="navbarNavDropdown">
  <ul class="navbar-nav px-0">
    <li class="nav-item dropdown">
      <button class="btn dropdown-toggle mx-0 px-0" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
  </ul>
</div>
  )
}
const SearchBar2 = () => {
  return (
    <div class="input-group ">
      <input type="text" class="form-control-sm" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class="btn btn-outline-secondary" variant="primary" style={{ backgroundColor: '#8064A2' }} type="button" id="button-addon2">
        <GoSearch color='white' style={{ marginBottom:'3px' }} />
      </button>
    </div>

)}
const SearchBar = () => {
  return (
  <div className='searchDiv'>
    <input className='searchInput' type="search" placeholder="Search here..." />
    <button className='searchButton' >
      <GoSearch color='white' style={{ marginBottom:'3px' }} />
    </button>
</div>

)}
const Navbarhere = () => {
  return (
    <Navbar expand="lg" className="navbarDiv">
    <Container className="navContainer">
      <img src={HobbyCueLogo} alt="HobbyCue Logo" className="navbarLogo" />
      <SearchBar />

      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav" className='navItems' >
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <div className='dropdown'>
            <FaCompass  color='#8064A2' />
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">People - Community</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Places - Venues</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Programs - Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Products - Store</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Blogs</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className='dropdown'>
            <MdStars   color='#8064A2' />
            <NavDropdown title="Hobbies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </div>

        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )

}
