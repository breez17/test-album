import React, {Component} from 'react';
import {userService} from '../../../data/services/userService';
import Input from '../../UI/Input/Input'
import Button from "../../UI/Button/Button";
import is from 'is_js'
import axios from 'axios'
import Loader from "../../UI/Loader/Loader";


/*Stylesheet*/
import './Auth.css'
import {authActions} from "../../../data/actions";
import {connect} from "react-redux";


class Index extends Component {


    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'E-mail',
                errorMessage: 'Неправильный E-mail',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            login: {
                value: '',
                type: 'text',
                label: 'Логин',
                errorMessage: 'Неправильный Логин',
                valid: false,
                touched: false,
                validation: {
                    required: true,

                }

            },
        }
    };


    componentDidMount() {
        // userService.logIn()
        //     .then(data => {
        //         console.log(data)
        //     });
        // this.setState({
        //     loading:false,
        // });
    }


    handleLogin = () => {
        const {dispatch} = this.props;
        const authData = {
            email: this.state.formControls.email.value,
            login: this.state.formControls.login.value,
        };
        try {
            dispatch(authActions.login(authData.login, authData.email));

        } catch (e) {
            console.log(e)
        }
    };

    submitHandler = (event) => {
        event.preventDefault()
    };

    validateControl(value, validation) {
        let isValid = true;

        if (!validation) {
            return true
        }

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }


        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        return isValid

    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            formControls, isFormValid
        })
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className="page__container container">
                <div className="wrapper-form">
                    {
                        this.props.loading ? <Loader/> :
                            <form className="actionForm" onSubmit={this.submitHandler}>
                                {this.renderInputs()}
                                <Button type="success"
                                        onClick={this.handleLogin}
                                        disabled={!this.state.isFormValid}
                                >Вход</Button>
                            </form>
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = ({authState}) => {
    return {
        loading: authState.loading
    }
};

export default connect(mapStateToProps)(Index);