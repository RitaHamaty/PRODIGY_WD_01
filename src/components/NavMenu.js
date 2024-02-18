import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useThemeContext } from '../context/ThemeContext';
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

const NavMenu = () => {

  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const {theme, toggleTheme} = useThemeContext();

  const handleClick = (event) => {
    toggleTheme(event);
    console.log(event);
  };

  return (
    <Navbar collapseOnSelect  expand="lg" expanded={expanded} className={`menu ${theme}`}
      variant={theme === 'light' ? 'light' : 'dark'}>
      <Container >
        <Navbar.Brand href='/' className={`logo ${theme}`}>Weather <span className='span' >Today</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link  to="/"  title='Home' className={`item ${theme}`}>Home</Nav.Link>
            <Nav.Link  to="/" title='Services' className={`item ${theme}`}>Services</Nav.Link>
            <Nav.Link  to="/"  title='About' className={`item ${theme}`}>About</Nav.Link>
            <Nav.Link  to="/" title='Contact' className={`item ${theme}`}>Contact</Nav.Link>
            {theme === 'light' ? <FiSun className='sun' onClick={e => handleClick('dark')}/> : <LuMoonStar className='moon' onClick={e => handleClick('light')}/>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

      
export default NavMenu;