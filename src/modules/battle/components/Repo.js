import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {DateTime, Number, Link} from '../../core';

const RepoProperties = glamorous.ul({
  padding: 0,
  ' li': {
    listStyleType: 'none'
  }
});

const InlineHead = glamorous.div({
  display: 'inline-block',
  fontWeight: 'bold',
  width: 150
});

function Repo({repo}) {
  return(
    <RepoProperties>
      <li><InlineHead>URL:</InlineHead><Link href={repo.html_url} /></li>
      <li><InlineHead>Description:</InlineHead> {repo.description}</li>
      <li><InlineHead>Language:</InlineHead> {repo.language}</li>
      <li><InlineHead>Created:</InlineHead> <DateTime value={repo.created_at} /></li>
      <li><InlineHead>Updated:</InlineHead> <DateTime value={repo.updated_at} /></li>
      <li><InlineHead>Pushed:</InlineHead> <DateTime value={repo.pushed_at} /></li>
      <li><InlineHead>Files:</InlineHead> <Number value={repo.size} /></li>
      <li><InlineHead>Stars:</InlineHead> <Number value={repo.stargazers_count} /></li>
      <li><InlineHead>Watchers:</InlineHead> <Number value={repo.watchers_count} /></li>
    </RepoProperties>
  );
}

Repo.propTypes = {
  repo: PropTypes.object.isRequired
};

export default Repo;