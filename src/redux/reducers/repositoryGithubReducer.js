import * as actionTypes from 'Redux/actions/actionTypes'

const initialState = {
    total_count: 0,
    items: []
}
/*
    id, name, description
 */


export const repositoryGithubReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_REPOSITORY_GITHUB:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
