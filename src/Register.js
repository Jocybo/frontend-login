/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://loginsec.herokuapp.com/register', values);
                navigate('/login');
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
                        <img src={require('./assets/undraw_Mobile_login_re_9ntv.png')} className="img-fluid" />
                        <div className='fs-4 d-flex justify-content-center text-center'>REGISTER HERE</div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-center">
                        <label>Name</label>
                        <input
                            type={'text'}
                            name="name"
                            id="name"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <label>Email</label>
                        <input
                            type={'email'}
                            name="email"
                            id="email"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <div className="col-lg-12">
                            <label>Password</label>
                            <input
                                type={'password'}
                                name="password"
                                id="password"
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>
                        <div className="col-lg-12">
                            <input type={'submit'} className="btn btn-primary buttons mt-3 small-but" value="Sing Up" /> 
                            <input type={'submit'} className="btn btn-primary ms-3 mt-3 small-but"  value={'Login'} onClick={() => navigate('/')}/>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Register;
