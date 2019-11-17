import React, { useState, useMemo } from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import {UserContext} from "./context/UserContext";

export default function withRouterExample(ComponentContent){
    return function(props) {
         const [user, setUser] = useState({
             username:'',
             email:''
         });
         const value = useMemo(() => ({ user, setUser }), [user, setUser]);
            return(
                <UserContext.Provider value={value}>
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
                </UserContext.Provider>
            )
        }

}

