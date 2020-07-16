import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, RootStateType} from './redux/state';

export const rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>

            <App state={state} addPost={addPost}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

serviceWorker.unregister();
