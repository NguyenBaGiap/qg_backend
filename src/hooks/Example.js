import React, { useState, useEffect  } from 'react';
import PropTypes from "prop-types";

export default function Example(props) {

    return (
        <div>
            <p>Count info: {props.count} </p>

            <button onClick={props.updateCount}>
                Increment Count
            </button>
        </div>
    );
}


Example.propTypes  = {
    count: PropTypes.number,
    updateCount: PropTypes.func
};
