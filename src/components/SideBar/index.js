import React from 'react';
import { SideBarContainer,Icon,CloseIcon,
  SideBarWrapper,SideBarMenu,SideBarLink,SideBartBtnWrap, SideBarRoute } from './SideBarElements';

const SideBar = ({IsOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={IsOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to='about' onClick={toggle}>
              About
            </SideBarLink>
            <SideBarLink to='discover' onClick={toggle}>
              Discover
            </SideBarLink>
            <SideBarLink to='services' onClick={toggle}>
              Services
            </SideBarLink>
            <SideBarLink to='signup' onClick={toggle}>
              Sign Up
            </SideBarLink>
          </SideBarMenu>
          <SideBartBtnWrap>
            <SideBarRoute to='/signin'>Sign In</SideBarRoute>
          </SideBartBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar 