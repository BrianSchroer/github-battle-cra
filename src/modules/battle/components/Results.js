import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import githubApi from '../../../api/githubApi';
import Player from './Player';
import {Loading} from '../../core';

class Results extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);

    githubApi.battle(
      [
        players.playerOneName,
        players.playerTwoName
      ]
    ).then(results => {
      if (results) {
         this.setState(() => ({
          winner: results[0],
          loser: results[1],
          error: null,
          loading: false
        }));
      } else {
        this.setState(() => ({
          error: 'ERROR: Check that both users exist on github.',
          loading: false
        }));
      }
    });
  }

  render() {
    const {error, winner, loser, loading} = this.state;

    if (loading) {
      return <Loading text="calculating" />;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      ); 
    }

    return (
      <div className="row">
        
        <Player
          label="Winner"
          score={winner.score}
          stars={winner.stars}
          profile={winner.profile}
        />
        
        <Player
          label="Loser"
          score={loser.score}
          stars={loser.stars}
          profile={loser.profile}
        />

      </div>
    );
  }
}

Results.propTypes = {
  location: PropTypes.shape ({
    search: PropTypes.string
  })
};

export default Results;