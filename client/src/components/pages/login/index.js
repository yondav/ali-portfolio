import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAdminContext from '../../../hooks/useAdminContext';
import Input from '../../input';
import './login.css';

const Login = () => {
  const { login, isLoggedIn } = useAdminContext();
  let history = useHistory();
  const [statusMessage, setStatusMessage] = useState('Message');

  useEffect(() => {
    const sm = document.querySelector('.status-message');

    if (isLoggedIn) {
      setStatusMessage('Welcome Back Alison');
      sm.className = 'status-message success';
      setTimeout(() => {
        sm.className = 'status-message';
        history.push('/admin');
      }, 3000);
    } else {
      setStatusMessage('Welcome Back Alison');
      sm.className = 'status-message failure';
      setTimeout(() => (sm.className = 'status-message'), 5000);
    }
  }, [isLoggedIn, history]);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (res) => {
    login(res.email, res.password);
    document.querySelector('.status-message').style.display = 'block';
  };

  return (
    <div className='login-card'>
      <p className='status-message' style={{ display: 'none' }}>
        {statusMessage}
      </p>
      <form id='login-form' onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          reg={register({ required: true })}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          reg={register({ required: true })}
        />
        <input className='btn' type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
