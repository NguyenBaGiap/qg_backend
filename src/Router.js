import React from "react";
import Header from "./elements/Header";
import Footer from "./elements/Header";

export default function withRouterExample(ComponentContent){
    return class extends React.Component {
        render() {
            return(
                <div className={'base-layout'}>
                    <header>
                        <Header />
                    </header>
                    <div className="container">
                        <ComponentContent {...this.props} />
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )
        }
    }

}

