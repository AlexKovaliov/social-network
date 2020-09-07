import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <App/>


        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.unregister();
// bind указывает на то чтобы данные брались именно из store