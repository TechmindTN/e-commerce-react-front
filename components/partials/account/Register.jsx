import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { userService, alertService } from '~/store/auth/authentication/services';
export default Register;

function Register () {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .required('Username is required'),
        password1: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        password2: Yup.string()
            .oneOf([Yup.ref('password1'), null], 'Passwords must match')
            .required('Confirm your password')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
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
                            <li>
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>Register An Account</h5>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>
                                <div className="form-group form-forgot">
                                 <label>Password</label>
                                 <input name="password1" type="password" {...register('password1')} className={`form-control ${errors.password1 ? 'is-invalid' : ''}`} />
                                 <div className="invalid-feedback">{errors.password1?.message}</div>
                                </div>
                                <div className="form-group form-forgot">
                                 <label>Confirm Password</label>
                                 <input name="password2" type="password" {...register('password2')} className={`form-control ${errors.password2 ? 'is-invalid' : ''}`} />
                                 <div className="invalid-feedback">{errors.password2?.message}</div>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth"
                                        disabled={formState.isSubmitting}>
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
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

