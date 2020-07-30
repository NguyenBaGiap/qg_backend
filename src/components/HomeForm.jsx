import React from "react";

export default class HomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    incrementStateValue = () => {
        this.setState({
            value: this.state.value + 1
        })
        this.props.incrementNumber()
    }
    render() {
        console.log("render.....homeform")

        return (
          <div>
              <button onClick={this.incrementStateValue}>
                  Tăng lên 1 đơn vị
              </button>
          </div>
        );
    }
}
