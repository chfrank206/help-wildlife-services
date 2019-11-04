import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/app';
import Home from './Components/Home';

const App: React.SFC<IAppProps> = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export interface IAppProps { }

export default App;