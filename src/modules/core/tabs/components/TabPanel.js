import React from 'react';
import PropTypes from 'prop-types';

export default class TabPanel extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return <div>{this.props.children}</div>; 
  }
}