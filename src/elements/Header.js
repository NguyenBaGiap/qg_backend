import React, { useState, useContext  } from 'react';
import {UserContext} from "../context/UserContext";

export default function Header() {
    const { user, setUser } = useContext(UserContext);

        return (
            <div style={{marginBottom:200}}>

                This is Header.
                {/*Hello {JSON.stringify(user)}*/}

                {/*<button onClick={()=>{*/}
                {/*    setUser({*/}
                {/*        username:'Teo',*/}
                {/*        email:'teo@gmail.com'*/}
                {/*    })*/}
                {/*}} > Change</button>*/}

                <hr />
            </div>
        );

}
