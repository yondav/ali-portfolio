import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { BsArrowRight } from 'react-icons/bs';
import './contact.css';
init('user_vaI97JhxiA8KpVHJ9XIkA');

const Contact = ({ handleClose }) => {
  const [statusMessage, setStatusMessage] = useState('Message');
  const [contactNumber, setContactNumber] = useState('000000');

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const statusMessage = document.querySelector('.status-message');
    const form = document.querySelector('#contact-form');

    // console.log(data);
    generateContactNumber();
    sendForm('default_service', 'template_ss7ainl', '#contact-form').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusMessage('Message sent!');
        statusMessage.className = 'status-message success';
        setTimeout(() => (statusMessage.className = 'status-message'), 3000);
        setTimeout(() => handleClose(), 2000);
      },
      (error) => {
        console.log('FAILED...', error);
        setStatusMessage('Failed to send message! Please try again later.');
        statusMessage.className = 'status-message failure';
        setTimeout(() => (statusMessage.className = 'status-message'), 5000);
      }
    );
  };

  return (
    <div className='contact'>
      <h1>Let's Talk</h1>
      <p className='status-message'>{statusMessage}</p>

      <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          name='user_name'
          placeholder='Name'
          maxLength='30'
          aria-invalid={errors.user_name ? 'true' : 'false'}
          ref={register({ required: true })}
          style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
        />
        <input type='hidden' name='contact_number' value={contactNumber} />
        {errors.user_name && errors.user_name.type === 'required' && (
          <div role='alert'>Name is required</div>
        )}
        <input
          type='text'
          name='user_email'
          placeholder='Email'
          maxLength='30'
          aria-invalid={errors.user_email ? 'true' : 'false'}
          ref={register({ required: true })}
          style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
        />
        {errors.user_email && errors.user_email.type === 'required' && (
          <div role='alert'>Email is required</div>
        )}
        <textarea
          type='text'
          name='message'
          placeholder='Message'
          maxLength='1500'
          aria-invalid={errors.message ? 'true' : 'false'}
          ref={register({ required: true })}
          style={{ borderBottom: errors.user_name && '1px solid #cc5555' }}
        />
        {errors.message && errors.message.type === 'required' && (
          <div role='alert'>Message is required</div>
        )}
        {/* <button className='submit-btn' type='submit'>
          Send <BsArrowRight />
        </button> */}
        <div className='submit'>
          <input className='submit-btn' type='submit' value='Send' />
          <BsArrowRight />
        </div>
      </form>
    </div>
  );
};

export default Contact;
