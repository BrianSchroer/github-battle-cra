import React from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends React.Component {

  static propTypes = {
    children: PropTypes.node
  }

  state = {
    activeIndex: 0
  }

  selectTabIndex = (activeIndex) => {
    this.setState({activeIndex});
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        activeIndex: this.state.activeIndex,
        onSelectTab: this.selectTabIndex
      });
    });

    return (
      <div>
        {children}
      </div>
    );
  }
}