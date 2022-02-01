import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import AxHome from './pages/AxHome';
import history from './history';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/axhome" component={AxHome} />
            </Switch>

        </Router>
    );
};

export default Routes;