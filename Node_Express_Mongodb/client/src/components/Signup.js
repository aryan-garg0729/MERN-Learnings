import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/signup.svg'
const Signup = () => {
    return <>
        <section className='signup'>
            <div className='container mt-5 '>
                <div className='row justify-content-center'>
                    <div className=' col-3 signup-form'>
                        <h2 className='form-title'>Sign Up</h2>
                        <form className='register-form' id='register-form'>
                            <div className='form-group'>
                                <label htmlFor='name'></label>
                                <input type='text' name='name' id='name' placeholder='name' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'></label>
                                <input type='email' name='email' id='email' placeholder='email' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone'></label>
                                <input type='number' name='phone' id='phone' placeholder='phone' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'></label>
                                <input type='password' name='password' id='password' placeholder='password' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='cpassword'></label>
                                <input type='password' name='cpassword' id='cpassword' placeholder='confirm password' />
                            </div>
                            <div className='form-group '>
                                <input type='submit' name='signup' id='signup' className='btn-primary btn form-submit ' value='Register' />
                            </div>
                        </form>
                    </div>
                    <div className='signup-img col-3'>
                        <figure>
                            <img src={logo} alt='i'/>
                        </figure>
                        <NavLink to='/login' className='registered me-auto'>Already registered?</NavLink>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Signup;