import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {Number, Link} from '../../core';

const PopularList = glamorous.ul({
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  ' li': {
    listStyleType: 'none' 
  }
});

const PopularItem = glamorous.li({
  margin: '20px',
  width: '200px'
});

const PopularItemProperties = glamorous.ul({
  padding: 0,
  marginBottom: 10,
});

const Rank = glamorous.div({
  fontSize: '20px',
  margin: '10px',
});

const RepoImage = glamorous.img({
  width: 150
});

const Description = glamorous.li({
  fontSize: 12
});

function RepoGrid({repos}) {
  return(
      repos &&
      <PopularList>
        {
          repos.map((repo, index) =>
          (
              <PopularItem key={repo.name}>
                <Rank>#{index + 1}</Rank>
                <PopularItemProperties>
                    <li>
                      <RepoImage
                        src={repo.owner.avatar_url}
                        alt={`Avatar for ${repo.owner.login}`} />
                    </li>
                    <li>
                      <Link href={repo.html_url} style={{fontWeight: 'bold'}}>{repo.name}</Link>
                    </li>
                    <li>
                      <Link href={repo.owner.html_url}>@{repo.owner.login}</Link>
                    </li>
                    <li>
                      <Number value={repo.stargazers_count}/> stars
                    </li>
                    <Description>
                      {repo.description}
                    </Description>
                </PopularItemProperties>
              </PopularItem>
          ))
        }
      </PopularList>
    ); 
}

RepoGrid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RepoGrid;