import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {GlobalStateType} from "./redux/redux-store";


/*type AppPropsType = {
    /!*store: StoreType*!/
}*/

class App extends React.Component<any> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        /*BrowserRouter должен быть только один, подчиняет себе переключение url*/
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'         // загружает callback который в ней передали
                               render={() => <DialogsContainer  // route вызывает функцию когда url совпадает
                               />}
                        />
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}
                        />
                        <Route path='/profile' render={() => <News/>}/>
                        <Route path='/profile' render={() => <Music/>}/>
                        <Route path='/profile' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: GlobalStateType) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(null, {initializeApp}))(App);