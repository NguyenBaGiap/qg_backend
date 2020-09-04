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

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
        return prevState.value;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevState !== this.state){
          console.log(snapshot)

      } else {
          //console.log("sdkfnsdkfnsjk")
      }
    }

    render() {
        console.log("render.....homeform")

        return (
          <div>
              <button onClick={this.incrementStateValue}>
                  Tăng {this.state.value } lên 1 đơn vị
              </button>
          </div>
        );
    }
}
