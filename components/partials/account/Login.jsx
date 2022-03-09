import React from 'react';
import Link from 'next/link';
import  Router ,{ useRouter } from 'next/router';
import { login } from '../../../store/auth/action';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { userService, alertService } from '~/store/auth/authentication/services';

function Login () {
   
    const router = useRouter();
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
        
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        Router.push('/');
        return userService.loogin(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
                this.props.dispatch(login());
            })
            .catch(alertService.error);
    }
       return (
            <div className="ps-my-account">
                <div className="container">
                    <form
                        className="ps-form--account"
                        onSubmit={handleSubmit(onSubmit)}
                        >
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                <label>Username</label>
                                        <input
                                            name="username"
                                            type="text"
                                            placeholder="Username or email address"
                                            name="username" 
                                            {...register('username')} 
                                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">{errors.username?.message}</div>
                                </div>
                                <div className="form-group form-forgot">
                                <label>Password</label>
                                        <input
                                            type="password"
                                            placeholder="Password..."
                                            name="password" 
                                            {...register('password')} 
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="remember-me"
                                            name="remember-me"
                                        />
                                        <label htmlFor="remember-me">
                                            Rememeber me
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group submit" disabled={formState.isSubmitting}>
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            >
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            >
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            >
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            >
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Login);
