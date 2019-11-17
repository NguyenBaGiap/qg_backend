import React, { useState, useEffect  } from 'react';
import PropTypes from "prop-types";

export default function HookRule(props) {

    const [name, setName] = useState('a');

    useEffect(function persistForm() {
        console.log('......persistForm')
        localStorage.setItem('formData', name);
    },[name]);

    const [surname, setSurname] = useState('b');

    useEffect(function updateTitle() {
        console.log('......updateTitle')
        document.title = name + ' ' + surname;
    },[name,surname]);

    // if (name !== '') {
    //     useEffect(function persistForm() {
    //         localStorage.setItem('formData', name);
    //     });
    // }
    function testClick() {
        console.log({name,surname})
    }

    return (
        <div>
            <p>Hook Rule explain </p>
            <p>
                Name : <input name={'name'} value={name} onChange={event => setName(event.target.value)} />
            </p>
            <p>
                Sur-name : <input name={'surname'} value={surname} onChange={event => setSurname(event.target.value)} />
            </p>
            <button onClick={testClick}>
                Click Test Hook Rules
            </button>
            <hr />

            <button onClick={()=> props.history.push('/hook-custom')} >Next Hook custom</button>
        </div>
    );
}


HookRule.propTypes  = {
    count: PropTypes.number
};

/**
 * Rule 1: Call hooks unconditionally at the top level of your component
 * Rule 2: Only call hooks in React functions or custom hooks
 * https://reactjs.org/docs/hooks-rules.html#explanation
 */
