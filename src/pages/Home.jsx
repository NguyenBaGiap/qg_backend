import React from "react";

export default class Home extends React.Component {

    redirectPage = () => {
        this.props.history.push('/test')
    }

    render() {
        return (
            <div>
                This is Home pages
                 <hr />
                <button onClick={this.redirectPage} >Go to Test pages</button>
            </div>
        );
    }
}
