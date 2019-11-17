import React from "react";
import WelcomeClass from "./components/WelcomeClass.jsx";
import WelcomeFunction from "./components/WelcomeFunction.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                Components by class:
                <WelcomeClass name={'React component by class'} />
                <hr />
                Components by function:
                <WelcomeFunction name={'React component by function'} />
            </div>
        )
    }
}

/**
 * https://reacttraining.com/react-router/core/api/Route/route-render-methods
 */
