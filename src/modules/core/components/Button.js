import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import buttonStyle from '../buttonStyle';

const StyledButton = glamorous.button(buttonStyle);

function Button(props) {
  const {type, disabled, children, ...otherProps} = props;

  return (
    <StyledButton 
      type={type} 
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  disabled: PropTypes.bool.isRequired
};

Button.defaultProps = {
  type: 'button',
  disabled: false
};

export default Button;