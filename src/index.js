import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Home from "./components/Home";
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState (state) {
        return state.get('routing').toJS();
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <Route path="/" component={Home}>
                <IndexRoute component={PhotoGrid} />
                <Route path='/view/:code' component={Single} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
