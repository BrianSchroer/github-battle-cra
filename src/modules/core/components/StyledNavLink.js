import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import linkStyle from '../linkStyle';
import {NavLink as RouterNavLink} from 'react-router-dom';

const StyledLink = glamorous(RouterNavLink)(linkStyle);

function StyledNavLink(props) {
  const {to, children, ...otherProps} = props;

  return (
    <StyledLink 
      to={to}
       activeClassName="active"  
      {...otherProps}
    >
      {children}
    </StyledLink>
  );
}

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default StyledNavLink;