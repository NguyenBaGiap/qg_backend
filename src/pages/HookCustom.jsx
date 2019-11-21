import React, { useState, useRef  } from 'react';
import GitHubSearchFunction from "../hooks/GitHubSearchFunction";



export default function HookCustom() {

    const [search, setSearch] = useState('');

    const inputEl = useRef(null);

    const onButtonClick = () => {
        setSearch(inputEl.current.value)
    };

    return (
        <div>
            <input type="text" placeholder="Search" ref={inputEl}  />
                <button type="submit" onClick={onButtonClick}>
                    Search
                </button>
            <h1>{search && `Search by: ${search}`}</h1>
                {search && <GitHubSearchFunction search={search} />}
        </div>
    );

}


/**
 * Rule 1: Call hooks unconditionally at the top level of your component
 * Rule 2: Only call hooks in React functions or custom hooks
 * https://reactjs.org/docs/hooks-rules.html#explanation
 */

