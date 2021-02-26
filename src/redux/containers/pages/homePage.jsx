import { connect } from 'react-redux';
import HomePage from 'Templates/pages/homePages/homePage'
import * as userGithubAction from 'Redux/actions/userGithubAction'

const mapStateToProps = state => ({
    initialValues: state.userGithubReducer.items[0],
    data: state.userGithubReducer.items,
    isLoading: state.restApiReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchUsersGithub: async query => {
        await dispatch(userGithubAction.fetchUserGithubRequest(query))
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
