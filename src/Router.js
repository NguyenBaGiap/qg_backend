import React, { useState, useMemo } from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

export default function withRouterExample(ComponentContent){
    return function(props) {
            return(
                    <div className={'base-layout'}>
                        <header>
                            <Header />
                        </header>
                        <div className="container">
                            <ComponentContent {...props} />
                        </div>
                        <footer>
                            <Footer />
                        </footer>
                    </div>
            )
        }

}

