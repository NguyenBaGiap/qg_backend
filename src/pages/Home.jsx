import React from "react";
import HomeForm from "../components/HomeForm.jsx";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
    }
    incrementValue = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        console.log("render.....home")
        return (
            <div>
                Number hiện tại: {this.state.number}
                <br/>
                <HomeForm
                    value={this.state.number}
                    incrementNumber = {this.incrementValue}
                />
            </div>
        );
    }
}
