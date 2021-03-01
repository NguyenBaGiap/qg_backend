import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { notificationReducer } from 'Redux/reducers/notificationReducer'
import { userGithubReducer } from 'Redux/reducers/userGithubReducer'
import { restApiReducer } from 'Redux/reducers/restApiReducer'
import {repositoryGithubReducer} from "Redux/reducers/repositoryGithubReducer";

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    notificationReducer,
    userGithubReducer,
    repositoryGithubReducer,
    restApiReducer
  })