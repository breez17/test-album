import React, {Component} from 'react';
import {userService} from "../../../services";

class Index extends Component {

    componentDidMount() {
        userService.getUsers()
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <h1>photo</h1>
            </div>
        );
    }
}

export default Index;