import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";


const ContentLayout = () => (
    <div className="container">
        <Switch>
            <Route path='/about' component={ About } />
            <Route path='/home/' component={ Home } />
            <Route path='/user/:id' component={ User } />
            <Route exact path='/' component={ Home } />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)

export default ContentLayout;