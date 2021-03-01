import * as actionTypes from 'Redux/actions/actionTypes'
import { GithubRequestClient } from 'Services/githubRequestClient'
import * as restApiAction from 'Redux/actions/restApiAction'

const githubRequest = new GithubRequestClient()

export const fetchRepositoryGithub = (data) => ({
    type: actionTypes.SEARCH_REPOSITORY_GITHUB,
    payload: data
})

export const fetchRepositoryGithubRequest = (param) => {
    return async dispatch => {
        dispatch(restApiAction.genRequestLoadingAction())
        try {
            const response = await githubRequest.fetchRepositories(param)
            dispatch(fetchRepositoryGithub(response))
            dispatch(restApiAction.genRequestLoadingAction())
        } catch (e) {
            console.log('error fetch: ', e)
        } finally {
            dispatch(restApiAction.genRequestFinishAction())
        }
    }
}
