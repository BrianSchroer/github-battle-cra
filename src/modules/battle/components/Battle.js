import React from 'react';
import glamorous from 'glamorous';
import {Button, ButtonLink} from '../../core';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

const PlayersDiv = glamorous.div({
    display: 'flex',
    justifyContent: 'space-around' 
});

export default class Battle extends React.Component {
    state = {
        playerOneImage: null, 
        playerOneName: '',
        playerTwoImage: null, 
        playerTwoName: ''
    };

    handleSubmit = (id, userName) => {
        this.setState(() =>  this.userStateUpdate(id, userName));
    }

    handleReset = (id) => {
        this.setState(() => this.userStateUpdate(id, '')); 
    }

    userStateUpdate(id, userName = '') {
        const newState = {};
        
        newState[`${id}Name`] = userName;
        
        newState[`${id}Image`] = (userName.length) 
            ?  `https://github.com/${userName}.png?size=200` 
            : null;
        
        return newState;
    }

    render() {
        const {match} = this.props; // route match string (e.g. '/battle')
        const {playerOneImage, playerOneName, playerTwoImage, playerTwoName} = this.state;
        const playerOneDefined = !!playerOneName;
        const playerTwoDefined = !!playerTwoName;

        return (
            <div>
                <PlayersDiv>

                    {(playerOneDefined) 
                        ? <PlayerPreview
                            avatar={playerOneImage}
                            userName={playerOneName}
                            onReset={this.handleReset} 
                          >
                            <Button
                                onClick={this.handleReset.bind(null, 'playerOne')}
                            >
                                Reset
                            </Button>
                          </PlayerPreview> 

                        : <PlayerInput
                            id="playerOne"
                            label="Player One"
                            onSubmit={this.handleSubmit}
                            /> 
                    }

                    {(playerTwoDefined)
                        ? <PlayerPreview
                            avatar={playerTwoImage}
                            userName={playerTwoName} 
                            onReset={this.handleReset}
                          >
                            <Button 
                                onClick={this.handleReset.bind(null, 'playerTwo')}
                            >
                                Reset
                            </Button>
                          </PlayerPreview> 

                        : <PlayerInput
                            id="playerTwo"
                            label="Player Two"
                            onSubmit={this.handleSubmit}
                            /> 
                    }
                    
                </PlayersDiv>

                {playerOneDefined && playerTwoDefined && 
                    <ButtonLink
                        to={{
                            pathname: `${match.url}/results`,
                            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                        }}
                    >
                        Battle
                    </ButtonLink>
                }

            </div>
        );
    }
}