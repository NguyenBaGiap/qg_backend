import React from "react";

const fetchDump = () => import ("../services/dump")

export default class DynamicImport extends React.Component {
    fetchDynamicImport = ()=> {
        fetchDump().then(dumps => {
            console.log(dumps)
        })
    }

    render() {
        console.log("render.....dynamic import")
        return (
            <div>
                <button onClick={this.fetchDynamicImport} >Click fetch data</button>
            </div>
        );
    }
}
