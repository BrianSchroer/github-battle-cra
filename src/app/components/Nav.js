import React from 'react';
import glamorous from 'glamorous';
import {StyledNavLink} from '../../modules/core';

const NavLinkList = glamorous.ul({
  padding: 0,
  display: 'flex',
  ' li': {
    listStyleType: 'none',
    marginRight: 15
  },
  ' a.active': {
    fontWeight: 'bold'
  } 
});

export default function Nav() {
  return(
    <NavLinkList>
      <li><StyledNavLink exact to="/">Home</StyledNavLink></li>
      <li><StyledNavLink to="/battle">Battle</StyledNavLink></li>
      <li><StyledNavLink to="/popular">Popular</StyledNavLink></li>
    </NavLinkList>
  );
}