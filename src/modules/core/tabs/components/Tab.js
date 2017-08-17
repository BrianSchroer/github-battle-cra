import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Li = glamorous.li(props => ({
  margin: '10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  listStyleType: 'none',
  paddingRight: 100,
  color: (props.isSelected) ? '#d0021b' : (props.isDisabled) ? 'silver' : null 
}));

export default class Tab extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    isSelected: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    isSelected: false,
    isDisabled: false
  }

  render() {
    const {isDisabled} = this.props; 

    return (
      <Li
        {...this.props} 
        onClick={(isDisabled) ? null : this.props.onSelect}
      >
        {this.props.children}
      </Li>
    );
  }
}