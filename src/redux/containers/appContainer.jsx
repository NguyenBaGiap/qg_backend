import { connect } from 'react-redux';
import AppContainer from 'Templates/appContainer'

const mapStateToProps = state => ({
    requestStatus: state.restApiReducer.isLoading
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
