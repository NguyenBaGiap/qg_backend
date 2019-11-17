import React, { useState, useEffect  } from 'react';
import ExampleAdvance from "../hooks/ExampleAdvance";

export default class HookBug extends React.Component {
    state = {
        count:0
    }

    updateCount = (count) => {
        console.log("count from children : " + count)
        this.setState({count})
    }

    render() {
        console.log("count render in parent: " + this.state.count)
        return (
            <div>
                <hr />
                This is Hook-bug-function pages
                <ExampleAdvance
                    count={this.state.count}
                    updateCount={this.updateCount}
                />
                <p>Count in Parent pages: {this.state.count}</p>
                <p>.....Next</p>
                <hr />
            </div>
        );
    }
}
