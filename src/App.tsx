import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


/*type AppPropsType = {
    /!*store: StoreType*!/
}*/

const App = (/*props: AppPropsType*/) => {
    /*BrowserRouter должен быть только один, подчиняет себе переключение url*/
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'         // загружает callback котороый в ней передали
                           render={() => <DialogsContainer  // route вызывает функцию когда url совпадает
                           />}
                    />

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}
                    />
                    <Route path='/profile' render={() => <News/>}/>
                    <Route path='/profile' render={() => <Music/>}/>
                    <Route path='/profile' render={() => <Settings/>}/>
                    {<Route path='/users' render={() => <UsersContainer/>}/>}
                    {<Route path='/login' render={() => <Login/>}/>}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;