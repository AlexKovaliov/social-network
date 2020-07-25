import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, RootStateType, updateNewPostText} from './redux/state';


const rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>

            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree);

serviceWorker.unregister();
