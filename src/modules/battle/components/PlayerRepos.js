import React from 'react';
import glamorous from 'glamorous';
import queryString from 'query-string';
import githubApi from '../../../api/githubApi';
import PlayerPreview from './PlayerPreview';
import {Loading} from '../../core';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '../../core/tabs';
import Repo from './Repo';

const StyledPlayerPreview = glamorous(PlayerPreview)({
  width: 200
});

export default class PlayerRepos extends React.Component {

  state = {
    loading: true,
    error: null,
    playerInfo: null,
    repos: null
  }

  componentDidMount() {
    const queryStringValues = queryString.parse(this.props.location.search);
    const playerName = queryStringValues.playerName;

    githubApi.getUserProfile(playerName)
      .then(playerInfo => {
        if (playerInfo) {
          this.setState({
            playerInfo: playerInfo,
            loading: false
          });
        } else {
          this.setState({
            error: 'ERROR retrieving player info',
            loading: false
          }); 
        }
      });

    githubApi.getUserRepos(playerName)
      .then(repos => {
        if (repos) {
          this.setState({
            repos: repos.data
              .filter(repo => !repo.private && !repo.fork)
              .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
              .slice(0, 5),
            loading: false
          });
        } else {
          this.setState({
            error: 'ERROR retrieving player repos',
            loading: false
          });
        }
      });
  }

  render() {
    const {loading, error, playerInfo, repos} = this.state;

    if (loading) {
      return <Loading />;
    }
    
    if (error) {
      return <div>{error}</div>; 
    }

    return (
      <div>

      {playerInfo && 
        <StyledPlayerPreview
          avatar={playerInfo.avatar_url}
          userName={playerInfo.login}
          url={playerInfo.html_url}
        >
          {repos && 
            <h2>
              Top {repos.length} recently updated public repos
            </h2>
          } 
        </StyledPlayerPreview>
      }

      {repos &&
        <Tabs>
          <TabList>
            {repos.map((repo) => <Tab key={repo.name}>{repo.name}</Tab>)}
          </TabList>
          <TabPanels>
            {repos.map((repo) => <Repo key={repo.name} repo={repo} />)}
          </TabPanels>
        </Tabs>
      }

      </div>
    );
  }
}