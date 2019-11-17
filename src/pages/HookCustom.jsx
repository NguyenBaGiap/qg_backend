import React, { useState, useEffect  } from 'react';
import PropTypes from "prop-types";

function searchGithub(query) {
    return fetch(
        `https://api.github.com/search/users?q=${query}+repos:%3E42+followers:%3E1000`
    )
        .then(resp => resp.json())
        .then(resp => resp.items);
}

function useGitHubSearch(search) {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            searchGithub(search).then(resp => setData(resp));
        },
        [search]
    );

    return data;
}


function GitHubSearchFunction(props) {
    const data = useGitHubSearch(props.search);

    return (
        <ul>
            <li>Total result: {data.length} </li>
            {data.map(item => (
                <li key={item.id}>
                    <a href={item.html_url}>
                        <img src={item.avatar_url} alt={item.name} />

                    </a>
                </li>
            ))}
        </ul>
    );
}

export default class HookCustom extends React.Component {
    state = {
        search: '',
    };

    inputRef = React.createRef();

    search = e => {
        e.preventDefault();
        this.setState({ search: this.inputRef.current.value });
    };

    render() {
        const { search } = this.state;

        return (
            <form onSubmit={this.search}>
                <input type="text" placeholder="Search" ref={this.inputRef} />
                <button type="submit" onClick={this.search}>
                    Search
                </button>
                <h1>{search && `Search by: ${search}`}</h1>
                {search && <GitHubSearchFunction search={search} />}
            </form>
        );
    }
}


GitHubSearchFunction.propTypes  = {
    search: PropTypes.string
};

/**
 * Rule 1: Call hooks unconditionally at the top level of your component
 * Rule 2: Only call hooks in React functions or custom hooks
 * https://reactjs.org/docs/hooks-rules.html#explanation
 */

