import React, { useState, useEffect, useRef  } from 'react';
import PropTypes from "prop-types";

export default function GitHubSearchFunction(props) {
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

GitHubSearchFunction.propTypes  = {
    search: PropTypes.string
};
