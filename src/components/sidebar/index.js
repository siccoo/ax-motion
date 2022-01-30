import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRoute, SideBtnWrap, SidebarMenu } from './SidebarElements'; 

const Sidebar = ({isOpen, toggle}) => {
  return (
  <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to="/" onClick={toggle}>
                    Facebook
              </SidebarLink>
              <SidebarLink to="/" onClick={toggle}>
                    LinkedIn
              </SidebarLink>
              <SidebarLink to="/" onClick={toggle}>
                    Youtube
              </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute>Get the full report</SidebarRoute>
          </SideBtnWrap>
      </SidebarWrapper>
  </SidebarContainer>
  );
};

export default Sidebar;
