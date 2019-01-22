import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import Provider from './provider';
import Consumer from './consumer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider>
        <Consumer>
            <App />
        </Consumer>
    </Provider>
,document.getElementById('root'));


serviceWorker.unregister();
