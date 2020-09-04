import React from 'react';
import NormalComponent from "../components/NormalComponent";
import MemoComponent from "../components/MemoComponent";

export default class LazyLoad extends React.Component  {
    state = {
        stateForPure: "State is static data.",
        primitiveValue: "primitiveValue",
        referenceValue: {
            typeValue:"String",
            value:"This is value reference."
        }
    }
    changeStatePage = () => {
        this.setState({
            primitiveValue: "primitiveValue has changed."
        })
    }

    propsAsFunction = () => {
        console.log( this.state)
    }

    render() {
        console.log(">>>>>>>>>>>>>>>>>>>>LazyLoad<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        return (
            <div>
                <NormalComponent data={this.state.primitiveValue} />
                <MemoComponent data={this.state.referenceValue} eventActive={this.propsAsFunction} />
                <button onClick={this.changeStatePage}>Change state Lazy Load</button>
            </div>
        );
    }

}
