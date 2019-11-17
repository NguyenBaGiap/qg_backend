import React from "react";
import { useHistory } from "react-router-dom";

export default class Home extends React.Component {

    redirectPage = () => {
        console.log(this.props.history)
        this.props.history.push('/user/99')
    }

    render() {
        return (
            <div>
                This is Home pages
                 <hr />
                <button onClick={this.redirectPage} >Go to user</button>
            </div>
        );
    }
}
