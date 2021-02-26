import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "Redux/containers/pages/homePage";

class AppContainer extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </React.Fragment>
        )
    }

}
export default AppContainer
