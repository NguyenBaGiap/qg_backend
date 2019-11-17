import React, { useState, useContext  } from 'react';
import {UserContext} from "../context/UserContext";

export default function HookContext(){
    const { user, setUser } = useContext(UserContext);
        return (
            <div>
                This is HookContext pages
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <button
                    onClick={() => {
                        setUser({
                            username:'giap_nb',
                            email:'giap_nb@septeni-technology.jp'
                        });
                    }}
                >
                    Change context example
                </button>
            </div>
        );
}
