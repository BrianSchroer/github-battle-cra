import React from 'react';
import glamorous from 'glamorous';
import {ButtonLink} from '../../core';
import {Link} from 'react-router-dom';

const Div = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export default class Home extends React.Component {
  render() {
    return (
      <Div>
        <h1>Github Battle: Battle your friends</h1>
        <ButtonLink to="/battle">Battle</ButtonLink> 
      </Div>
    );
  }
}