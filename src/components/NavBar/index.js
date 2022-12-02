import React from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {Nav,NavbarContainer,NavLogo,
        MobileIcon,NavMenu,NavItem,
        NavLinks,NavBtn,NavBtnLink} from './NavBarElements';



    const toggleHome = () => {
     scroll.scrollToTop();
    }

const Navbar = ({toggle}) => {
  return (
      <>
      <Nav>
          <NavbarContainer>
              <NavLogo to= '/' onClick={toggleHome}>Concurrency</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to='about'>About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='discover'>Discover</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='services'>Services</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='signup'>Sign Up</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to='/signin'>Sign In</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
      </>

  )
}

export default Navbar