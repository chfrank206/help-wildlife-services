import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/app';
import Home from './Components/Home';
import Navbar from './Components/Navbar'

const App: React.SFC<IAppProps> = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export interface IAppProps { }

export default App;