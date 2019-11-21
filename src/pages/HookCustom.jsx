import React, { useState, useEffect, useRef  } from 'react';
import PropTypes from "prop-types";


function GitHubSearchFunction(props) {
    //custom hook
    const  useGitHubSearch = (search) => {
        const [data, setData] = useState([]);

        useEffect(
            () => {
                searchGithub(search).then(resp => setData(resp));
            },
            [search]
        );

        return data;
    }

    //fetch data
    const  searchGithub = (query) => {
        return fetch(
            `https://api.github.com/search/users?q=${query}+repos:%3E42+followers:%3E1000`
        )
            .then(resp => resp.json())
            .then(resp => resp.items);
    }

    const resultSearch = useGitHubSearch(props.search);

    return (
        <ul>
            <li>Total result: {resultSearch.length} </li>
            {resultSearch.map(item => (
                <li key={item.id}>
                    <a href={item.html_url}>
                        <img src={item.avatar_url} alt={item.name} />

                    </a>
                </li>
            ))}
        </ul>
    );
}

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


GitHubSearchFunction.propTypes  = {
    search: PropTypes.string
};

/**
 * Rule 1: Call hooks unconditionally at the top level of your component
 * Rule 2: Only call hooks in React functions or custom hooks
 * https://reactjs.org/docs/hooks-rules.html#explanation
 */

