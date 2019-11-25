import React, { useState, useEffect, useRef  } from 'react';
import PropTypes from "prop-types";

export default function GitHubSearchFunction(props) {
    //custom hook
    const  useGitHubSearch = (search) => {
        const [data, setData] = useState([]);

        useEffect(
            () => {
                // cleanup
                //let isCancelled = false;
                 const abortController = new AbortController();

                searchGithub(search,abortController).then(resp =>  setData(resp));

                return () => {
                    // cleanup
                    //isCancelled = true;
                    abortController.abort();
                }
            },
            [search]
        );

        return data;
    }

    //fetch data
    const  searchGithub = (query,controller) => {
        return fetch(
            `https://api.github.com/search/users?q=${query}+repos:%3E42+followers:%3E1000`,
            { signal: controller.signal }
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
/**
 Re-render  component
 Update DOM virtual
 Tìm sự thay đổi
 Update DOM thật
 */
