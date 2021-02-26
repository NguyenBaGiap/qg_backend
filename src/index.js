import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import AppContainer from 'Redux/containers/appContainer'
import { configureStore, history } from 'Redux/store/configureStore'

const App = withRouter(AppContainer)

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.Fragment>
                <App />
            </React.Fragment>
        </ConnectedRouter>
    </Provider>,
document.getElementById("app-container")
);
