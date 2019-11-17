import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import Test from "./pages/Test.jsx";
import HookRule from "./pages/HookRule.jsx";
import HookCustom from "./pages/HookCustom.jsx";
import HookBug from "./pages/HookBug.jsx";


const ContentLayout = () => (
    <div className="container">
        <Switch>
            <Route path='/about' component={ About } />
            <Route path='/home/' component={ Home } />
            <Route path='/user/:id' component={ User } />
            <Route path='/test' component={ Test } />
            <Route path='/hook-rule' component={ HookRule } />
            <Route path='/hook-custom' component={ HookCustom } />
            <Route path='/hook-bug' component={ HookBug } />
            <Route exact path='/' component={ Home } />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)

export default ContentLayout;
