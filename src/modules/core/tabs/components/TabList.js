import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Ul = glamorous.ul({
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  borderStyle: 'solid',
  borderColor: 'silver',
  borderWidth: '1px 0 1px 0' 
});

export default class TabList extends React.Component {
  
  static propTypes = {
    children: PropTypes.node,
    activeIndex: PropTypes.number,
    onSelectTab: PropTypes.func
  }

  render() {
    const {activeIndex} = this.props;

    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isSelected: index === activeIndex,
        onSelect: () => this.props.onSelectTab(index) 
      });
    });

    return (
      <Ul>
        {children}
      </Ul>
    );
  }
}