import React from "react";
import PropTypes from 'prop-types';

export default class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}


WelcomeClass.propTypes  = {
    name: PropTypes.string
};