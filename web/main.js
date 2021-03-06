/**
 * Created by dandan.wu on 16/9/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';

import App from './App'
import store from './store';

import './styles/main.styl'

const history = syncHistoryWithStore(hashHistory,store);
let root = (
    <Provider store={store}>
        <App history={history} store={store}/>
    </Provider>
);
ReactDOM.render(root,document.getElementById('react-root'));
if(module.hot){
    module.hot.accept('./App', () => {
        let root = (
            <Provider store={store}>
                <App history={history} store={store}/>
            </Provider>
        );
        ReactDOM.render(root,document.getElementById('react-root'));
    });
}

