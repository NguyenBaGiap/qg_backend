import * as actionTypes from "Redux/actions/actionTypes";

/**
 * id, url, avatar_url
 * @type {{total_count: number, items: []}}
 */
const initialState = {
    total_count: 0,
    items: []
};

export const userGithubReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_USER_GITHUB:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}
