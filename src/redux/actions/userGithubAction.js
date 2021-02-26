import * as actionTypes from "Redux/actions/actionTypes";
import { GithubRequestClient} from "Services/githubRequestClient";
import * as restApiAction from 'Redux/actions/restApiAction'

const githubRequest = new GithubRequestClient();

export const fetchUserGithub = (data)=>({
    type: actionTypes.SEARCH_USER_GITHUB,
    payload: data
});

export const fetchUserGithubRequest = (param) => {
    return async dispatch => {
        dispatch(restApiAction.genRequestLoadingAction())
        try {
            const response = await githubRequest.fetchUsers(param);
            dispatch(fetchUserGithub(response));
            dispatch(restApiAction.genRequestLoadingAction())
        } catch (e) {
            console.log('error fetch: ', e)
        } finally {
            dispatch(restApiAction.genRequestFinishAction())
            console.log(' end search user')
        }
    };
}
