import React from 'react';
import {Div} from 'glamorous';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import {Home} from '../../modules/home';
import {Battle, Results} from '../../modules/battle';
import {Popular} from '../../modules/popular';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Div css={{    
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    maxWidth: '1200px',
                    margin: '0 auto'}}
                >
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path="/battle/results" component={Results} />
                        <Route path="/popular" component={Popular} />
                        <Route render={function() { 
                            return <h1>Page Not Found</h1>; 
                        }} />
                    </Switch>
                </Div>
            </BrowserRouter>
        );
    }
}
