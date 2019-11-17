import React from "react";

export default class User extends React.Component {
    render() {
        return (
            <div>
                This is User pages. Link : {this.props.location.pathname}
            </div>
        );
    }
}
