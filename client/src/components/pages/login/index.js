import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Input from '../../input';
import './login.css';

const Login = () => {
  const [statusMessage, setStatusMessage] = useState('Message');

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (res) => {
    const statusMessage = document.querySelector('.status-message');

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        '/admin/login',
        {
          email: res.email,
          password: res.password,
        },
        config
      );

      localStorage.setItem('authToken', data.token);

      setStatusMessage('Welcome Back Alison');
      statusMessage.className = 'status-message success';
      setTimeout(() => {
        statusMessage.className = 'status-message';
        window.location.replace('/admin');
      }, 3000);
      console.log(data);
    } catch (err) {
      console.log(err);
      setStatusMessage("Invalid Credentials. Prove You're Alison!");
      statusMessage.className = 'status-message failure';
      setTimeout(() => (statusMessage.className = 'status-message'), 5000);
    }
  };

  return (
    <div className='login-card'>
      <p className='status-message'>{statusMessage}</p>
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
