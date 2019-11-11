import React, {Component} from 'react'
import Auth from '../Auth'
import Albums from '../Albums'
import Photo from '../Photo'
import {Route} from 'react-router-dom'

/*Stylesheet*/
import './Home.css'


class Index extends Component {
    render() {
        return (
            <div className="page">
                <header className="Home__header">
                    <nav className="Home__header-navigation">
                        <ul className="navigation__list">
                            <li className="list-item"><a className="link-item" href="/home">Home</a></li>
                            <li className="list-item"><a className="link-item" href="/auth">Authorization</a></li>
                            <li className="list-item"><a className="link-item" href="/albums">Albums</a></li>
                            <li className="list-item"><a className="link-item" href="/photo">Photo</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="page__container">
                    <div className="page__holder">
                        <Route
                            path="/home"
                            render={() => <h1>Welcome!</h1>
                            }
                        />
                        <Route
                            path="/auth"
                            component={Auth}
                        />
                        <Route
                            path="/albums"
                            component={Albums}
                        />

                        <Route
                            path="/photo"
                            component={Photo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;