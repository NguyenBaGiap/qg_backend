import axios from 'axios';
import { configureStore } from 'Redux/store/configureStore'
import * as restApiAction from "Redux/actions/restApiAction";


const request = axios.create();
const store = configureStore();

request.interceptors.request.use(config => {
    store.dispatch(restApiAction.genRequestLoadingAction())
    return config;

}, error => {
    store.dispatch(restApiAction.genRequestFinishAction())
    return Promise.reject(error);
});

request.interceptors.response.use(response => {
    store.dispatch(restApiAction.genRequestFinishAction())
    return response;
}, error => {
    store.dispatch(restApiAction.genRequestFinishAction())
    return Promise.reject(error);
});

export default request;
