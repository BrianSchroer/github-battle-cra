import React from 'react';
import PropTypes from 'prop-types';
import {Header}  from 'glamorous';
import Profile from './Profile';
import {Number} from '../../core';

function Player({label, score, stars, profile}) {
  return (
    <div>
      <Header css={{
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: '200'
      }}
      >
        {label}
      </Header>
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