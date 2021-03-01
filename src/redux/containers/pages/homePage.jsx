import { connect } from 'react-redux';
import HomePage from 'Templates/pages/homePages/homePage'
import * as userGithubAction from 'Redux/actions/userGithubAction'
import * as repositoryGithubAction from 'Redux/actions/repositoryGithubAction'

const mapStateToProps = state => ({
    initialValues: {
        login: ''
    },
    userData: state.userGithubReducer.items,
    repositoryData: state.repositoryGithubReducer.items,
    isLoading: state.restApiReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchUsersGithub: async query => {
        await dispatch(userGithubAction.fetchUserGithubRequest(query))
    },
    fetchRepositoryGithub: async query => {
      await dispatch(repositoryGithubAction.fetchRepositoryGithubRequest(query))
    },
    onSubmit: async (values)=> {
        await dispatch(userGithubAction.fetchUserGithubRequest({
            q: values.login
        }))
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
