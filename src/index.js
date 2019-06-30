import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducer from './reducers';
import './styles/app.scss';

ReactDOM.render(
    <Provider store={createStore(reducer, applyMiddleware(logger))}>
        <App />
    </Provider>, document.getElementById('app'));