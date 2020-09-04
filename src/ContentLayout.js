import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DynamicImport from "./pages/DynamicImport";
import LazyLoad from "./pages/LazyLoad";

const ContentLayout = () => (
    <div className="container">
        <Switch>
            <Route exact path='/' component={ DynamicImport } />
            <Route exact path='/lazy' component={ LazyLoad } />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)

export default ContentLayout;
