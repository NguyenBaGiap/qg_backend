import * as actionTypes from 'Redux/actions/actionTypes';

export const genRequestLoadingAction = () => ({
    type: actionTypes.REQUEST_LOADING_STATUS,
    payload: {
        isLoading: true,
    }
});

export const genRequestFinishAction = () => ({
    type: actionTypes.REQUEST_FINISH_STATUS,
    payload: {
        isLoading: false,
    }
});
