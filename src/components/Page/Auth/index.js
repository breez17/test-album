import React, {Component} from 'react';
import {userService} from '../../../services';
import Input from '../UI/Input/Input'
import Button from "../UI/Button/Button";
import is from 'is_js'

/*Stylesheet*/
import './Auth.css'



class Index extends Component {

    state = {
      formControls: {
          email: {
              value: '',
              type: 'email',
              label: 'E-mail',
              errorMessage: 'Неправильный E-mail',
              valid:false,
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
              valid:false,
              touched: false,
              validation: {
                  required: true,

              }
          },
      }
    };

    componentDidMount() {
        userService.getUsers()
            .then(data => {
                console.log(data)
            })
    }

    loginHandler = () => {

    };

    registerHandler = () => {

    };

    submitHandler = (event) => {
        event.preventDefault()
    };

    validateControl(value, validation) {
        let isValid = true;

        if(!validation) {
            return true
        }

        if(validation.required) {
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

        this.setState({
            formControls
        })
    };

    renderInputs() {
      return Object.keys(this.state.formControls).map((controlName, index) => {
           const control = this.state.formControls[controlName];
            return(
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
                        <form className="actionForm" onSubmit={this.submitHandler}>
                            {this.renderInputs()}
                            <Button type="success"
                            onClick={this.loginHandler}
                            >Вход</Button>
                            <Button type="custom"
                                    onClick={this.registerHandler}
                            >Регистрация</Button>

                        </form>
                    </div>
                </div>
        );
    }
}

export default Index;