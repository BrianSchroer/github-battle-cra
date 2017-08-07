import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {Link} from '../../core';

const UserAvatar = glamorous.img({
  width: '150px',
  borderRadius: '50%'
});

const Column = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  alignItems: 'center',
});
 
function PlayerPreview({avatar, userName, url, children}) {
 return (
    <div>
        <Column>
          
          <UserAvatar
            className="user-avatar"
            src={avatar}
            alt={`Avatar for ${userName}`}
          />
          
          {(url)
            ? <h2><Link href={url}>@{userName}</Link></h2>
            : <h2>@{userName}</h2>
          }
        
        </Column>
        {children}
    </div>
  );
} 

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default PlayerPreview;