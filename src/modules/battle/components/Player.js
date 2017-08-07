import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Profile from './Profile';
import {Number} from '../../core';

const Header = glamorous.h1({
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: '200'
});


function Player({label, score, stars, profile}) {
  return (
    <div>
      <Header>{label}</Header>
      <h3 style={{textAlign: 'center'}}>Score: <Number value={score}/></h3>
      <Profile info={profile} stars={stars} /> 
    </div>
  );
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
};

export default Player;