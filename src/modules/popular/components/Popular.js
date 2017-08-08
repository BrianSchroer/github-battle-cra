import React from 'react';
import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';
import {Loading} from '../../core';
import githubApi from '../../../api/githubApi';

export default class Popular extends React.Component {

  state = {
    selectedLanguage: 'All',
    repos: null
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (language) => {
    this.setState({
      selectedLanguage: language,
      repos: null
    });

    githubApi.fetchPopularRepos(language)
      .then(repos => this.setState({repos: repos}));
  }

  render() { 
    const {repos} = this.state;

    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          (repos) 
            ? <RepoGrid repos={repos} /> 
            : <Loading/>
        }      
      </div>
    );
  }
}