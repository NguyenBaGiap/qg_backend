import React, { useState, useEffect  } from 'react';
import PropTypes from "prop-types";

export default function ExampleAdvance(props) {
    const [count, setCount] = useState(props.count);

    let updateCount = () => {
        setCount(count => count + 1)
        console.log("count da dc update " + count)

    }

    // useEffect(
    //     () => {
    //         console.log('update count....')
    //         props.updateCount(count)
    //     },
    //     [count]
    // );

    console.log("count before render in children: " + count)

    return (
        <div>
            <p>Count info: {count} </p>

            <button onClick={updateCount}>
                Increment Count
            </button>
        </div>
    );
}


ExampleAdvance.propTypes  = {
    count: PropTypes.number,
    updateCount: PropTypes.func
};
