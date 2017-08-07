import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {Button} from '../../core';

const Form = glamorous.form({
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  alignItems: 'center'
});

const Label = glamorous.label({
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: '200',
});

const UserNameInput = glamorous.input({
    borderRadius: '3px',
    margin: '10px 0',
    padding: '5px',
    border: '1px solid rgba(0, 0, 0, 0.43)',
    fontSize: '16px',
    width: '80%'     
});

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {userName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const userName = event.target.value;
    this.setState(() => ({userName}));
  }

  handleSubmit(event) {
    const {onSubmit, id} = this.props;
    const {userName} = this.state;

    event.preventDefault();
    
    onSubmit(id, userName);
  }

  render() {
    const {label} = this.props;
    const {userName} = this.state;

    return (
      <Form
        onSubmit={this.handleSubmit}
      >
        
        <Label 
          htmlFor="userName"
        >
          {label}
        </Label>
        
        <UserNameInput
          type="text"
          id="userName" 
          placeholder="github user name"
          autoComplete="off"
          value={userName}
          onChange={this.handleChange}
        />

        <Button
          type="submit"
          disabled={!userName}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PlayerInput;