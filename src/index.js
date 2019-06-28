import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers/reducer';
import './styles/app.scss';

const rootElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>, rootElement);