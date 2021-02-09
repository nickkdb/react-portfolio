import React, { Component } from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
      try {
        const templateParams = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        };

        await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
        );
        reset();
      } catch (e) {
          console.log(e);
      }
  };

  return (
      <>
<Form onSubmit={handleSubmit(onSubmit)} noValidate>
    <Form.Row>
    <Col>
  <Form.Group controlId="formName">
      <Form.Control 
      type="text" 
      name="name" 
      className="formInput"
      ref={register({
          required: { value: true, message: 'Please enter your name' },
          maxLength: {
            value: 30,
            message: 'Please use 30 characters or less'
          }
      })}
      placeholder="Name" />
      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
  </Form.Group>
    </Col>
    <Col>
  <Form.Group controlId="formBasicEmail">
    <Form.Control 
    type="email"
    name="email"
    className="formInput"
    ref= {register({
        required: true,
        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      })}
    placeholder="Email" />
    {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
  </Form.Group>
    </Col>
  </Form.Row>
  
  <Form.Group controlId="subject">
  <Form.Control 
  type="text"
      name="subject"
      className="formInput"
      ref={register({
        required: { value: true, message: 'Please enter a subject' },
        maxLength: {
          value: 75,
          message: 'Subject cannot exceed 75 characters'
        }
      })}
  placeholder="Subject" />
  {errors.subject && (<span className='errorMessage'>{errors.subject.message}</span>)}
    </Form.Group>    
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control 
    as="textarea" 
    name="message"
    placeholder="Message" 
    rows={3}
    ref={register({
        required: true
      })}
      className="formInput"/>
  </Form.Group>
    <br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </>
  )
}

export default ContactForm;

