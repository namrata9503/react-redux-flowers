import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import { checkValidity } from '../../shared/validation';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Auth.css';
import * as authActions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BuyFlower from '../../assets/images/login.jpg';
import Video from '../../assets/images/ywllow.mp4';


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }

    componentDidMount() {
        if (!this.props.touchingFlower && this.props.authRedirect !== "/") {

            this.props.onSetRedirectPath();

        }

    }


    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        if (this.props.loading) {
            form = <Spinner />
        }
        let errorMeassage = null;
        if (this.props.error) {
            errorMeassage = (
                <p className={classes.Error}>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirect} />
        }

        return (
            <Aux>

                <div className={classes.full}>
                    <div className={classes.bgvideo}>
                        <video autoPlay loop muted className={classes.bgvideo__content}>
                            <source src={Video} type="video/mp4" />
                            <source src={Video} type="video/webm" />
                                    Your browser does not support... :(
                         </video>
                    </div>
                    <div className={classes.Auth}>
                        <div className={classes.Upper}>
                            <img src={BuyFlower} alt="Buy Flower" />
                            <p><span>FLAT 5% OFF + FREE SHIPPING </span>On your first Order</p>
                        </div>
                        <h3 className={classes.Heading}>{!this.state.isSignup ? ' Login Form' : 'SIGNUP Form'}</h3>
                        {authRedirect}
                        {errorMeassage}
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <Button btnType="Success">SUBMIT</Button>
                        </form>
                        <Button
                            clicked={this.switchAuthModeHandler}
                            btnType="Danger">{this.state.isSignup ? 'Already User? Click to SIGNIN' : 'New User? Click to SIGNUP'}</Button>
                    </div>
                </div>

            </Aux>

        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        touchingFlower: state.flowerValley.touchingFlowers,
        authRedirect: state.auth.authRedirect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(authActions.auth(email, password, isSignup)),
        onSetRedirectPath: () => dispatch(authActions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);