import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import AxHome from './pages/AxHome';
import history from './history';

const Routes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Router history={history}>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Switch>
                <section className="ax__hero">
                    <motion.h1 className="ax__hero__text">Our Sectors</motion.h1>
                    <Route exact path="/" component={Home} />
                    <Route path="/axhome" component={AxHome} />
                </section>
            </Switch>

        </Router>
    );
};

export default Routes;