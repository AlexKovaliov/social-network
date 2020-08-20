import React from 'react';
import './index.css';
import {StateType, store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";


// функция которая отрисовывает всё дерево
const rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>

                <App /> // bind указывает на то чтобы данные брались именно из store

            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
}); //вызывает перерисовку всей страницы

serviceWorker.unregister();
