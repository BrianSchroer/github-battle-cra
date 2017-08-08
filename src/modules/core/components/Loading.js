import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

export default class Loading extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number.isRequired,
    maxDots: PropTypes.number.isRequired
  };

  static defaultProps = {
    text: 'loading',
    speed: 300,
    maxDots: 3
  };

  state = {
    text: Loading.defaultProps.text
  };

  componentDidMount() {
    const startingText = this.props.text;
    this.state.text = startingText;
    const maxLength = startingText.length + this.props.maxDots;

    this.interval = window.setInterval(() => {
      const {text} = this.state;
      this.setState({text: (text.length < maxLength) ? text + '.' : startingText});
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}