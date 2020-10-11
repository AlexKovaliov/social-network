import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

/*type AppPropsType = {
    /!*store: StoreType*!/
}*/

const App = (/*props: AppPropsType*/) => {
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
                           render={() => <ProfileContainer/>}
                    />
                    <Route path='/profile' render={() => <News/>}/>
                    <Route path='/profile' render={() => <Music/>}/>
                    <Route path='/profile' render={() => <Settings/>}/>
                    {<Route path='/users' render={() => <UsersContainer/>}/>}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;