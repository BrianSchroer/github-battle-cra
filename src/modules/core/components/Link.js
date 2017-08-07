import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import linkStyle from '../linkStyle';

const StyledLink = glamorous.a(linkStyle);

function Link(props) {
  const {href, isExternal, children, ...otherProps} = props;

  return (
    <StyledLink 
      href={href}
      target={isExternal &&  "_blank"}
      {...otherProps}
    >
      {children|| href}
    </StyledLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool.isRequired,
  children: PropTypes.node
};

Link.defaultProps = {
  isExternal: true 
};

export default Link;