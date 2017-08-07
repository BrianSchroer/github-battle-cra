import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import PlayerPreview from './PlayerPreview';
import {Number, Link} from '../../core';

const PlayerProperties = glamorous.ul({
  padding: 0,
  ' li': {
    listStyleType: 'none' 
  }
});

function Profile({info, stars}) {
  return (
    <PlayerPreview
      avatar={info.avatar_url}
      userName={info.login}
      url={info.html_url}
    >
      <PlayerProperties>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Stars: <Number value={stars} /></li>
        <li>Followers: <Number value={info.followers}/></li>
        <li>Following: <Number value={info.following}/></li>
        <li>Public Repos: <Number value={info.public_repos}/></li>
        {info.blog && <li><Link href={info.blog} /></li>}
      </PlayerProperties>
    </PlayerPreview>
  );
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
  stars: PropTypes.number.isRequired
};

export default Profile;