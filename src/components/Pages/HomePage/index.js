import React, {Component} from 'react'
import Auth from '../Auth'
import Albums from '../Albums'
import Photo from '../Photo'
import {Route, NavLink} from 'react-router-dom'

/*Stylesheet*/
import './Home.css'
import '../../UI/Loader/Loader.css'


class Index extends Component {
    render() {
        return (
            <div className="page">
                <header className="Home__header">
                    <nav className="Home__header-navigation">
                        <ul className="navigation__list">
                            <li className="list-item"><NavLink className="link-item" to="/auth">Authorization</NavLink></li>
                            <li className="list-item"><NavLink className="link-item" to="/home">Home</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <div className="page__container">
                    <div className="page__holder">
                        <Route
                            path="/home"
                            render={() => <h1 className="greeting">Welcome!</h1>
                            }
                        />
                        <Route
                            path="/auth"
                            component={Auth}
                        />
                        <Route
                            exact
                            path="/albums"
                            component={Albums}
                        />

                        <Route
                            path="/albums/:albumId"
                            component={Photo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;