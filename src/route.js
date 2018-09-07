import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Memes from './Components/Memes';

export default <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/memes" component={Memes} />
    <Route path="/" component={Home} />
</Switch>