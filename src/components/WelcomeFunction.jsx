import React from "react";
import PropTypes from 'prop-types';

export default function WelcomeFunction(props) {
    return <h1>Hello, {props.name}</h1>;
}

WelcomeFunction.propTypes  = {
    name: PropTypes.string
};