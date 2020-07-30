import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RootStateType} from './redux/state';


const rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>

            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();
