import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from "./pages/Home";

const ContentLayout = () => (
    <div className="container">
        <Switch>
            <Route exact path='/' component={ Home } />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)

export default ContentLayout;
