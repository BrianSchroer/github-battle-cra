import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Panels = glamorous.div({
  fontSize: 20
});

export default class TabPanels extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    activeIndex: PropTypes.number
  }

  render() {
    const activeIndex = this.props.activeIndex;

    return (
      <Panels>
        {this.props.children[activeIndex]}
      </Panels>
    ); 
  }
}