/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post('https://loginsec.herokuapp.com/login', values);
                window.localStorage.setItem('myapptoken', loginData.data.token);
                navigate('/home');
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    });
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                        <img src ={require('./assets/undraw_secure_login_pdn4.png')} className="img-fluid"/>
                        <div className='fs-4 d-flex justify-content-center text-center'>Welcome to Our Brand</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-center">
                        <label>Email</label>
                        <input
                            type={'email'}
                            className="form-control"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required
                        />
                        <label className='mt-2'>Password</label>
                        <input
                            type={'password'}
                            className="form-control"
                            name="password"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <div className="col-lg-12 mt-3 buttons">
                            <input type={'submit'} className="btn btn-primary small-but" value={'Login'} />
                            <input type={'submit'} className="btn btn-primary small-but ms-2" value={'Sign Up'} onClick={() => navigate('/register')}/>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Login;
