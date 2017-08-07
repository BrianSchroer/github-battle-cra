import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import buttonStyle from '../buttonStyle';

const StyledLink = glamorous(Link)(buttonStyle);

function ButtonLink(props) {
  const {to, children, ...otherProps} = props;

  return (
    <StyledLink 
      to={to}
      {...otherProps}
    >
      {children}
    </StyledLink>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.any.isRequired
};

export default ButtonLink;