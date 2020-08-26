import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom"
import {ActionPropsType, RootStateType, StoreType} from './redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {

    /*store: StoreType*/
}

const App = (props: AppPropsType) => {
    /*BrowserRouter должен быть только один, подчиняет себе переключение url*/
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'         // загружает callback котороый в ней передали
                           render={() => <DialogsContainer  // route вызывает функцию когда url совпадает
                           />}
                    />

                    <Route path='/profile'
                           render={() => <Profile

                           />}
                    />
                    <Route path='/profile' render={() => <News/>}/>
                    <Route path='/profile' render={() => <Music/>}/>
                    <Route path='/profile' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;