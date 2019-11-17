import React, { useState, useEffect  } from 'react';
import PropTypes from "prop-types";

export default function ExampleAdvance(props) {
    return (
        <div>
            <p>Count info: {props.count} </p>

            <button onClick={props.updateCount}>
                Increment Count
            </button>
        </div>
    );
}


ExampleAdvance.propTypes  = {
    count: PropTypes.number
};
