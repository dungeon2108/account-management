import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from 'reactstrap';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
  birthday: Yup.date().required('Birthday is required'),
});

const SignUp = () => (
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-6 mt-3'>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>
              <h3>Sign Up</h3>
            </CardTitle>
            <Formik
              initialValues={{
                fullName: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                birthday: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormGroup>
                    <Label htmlFor='fullName'>Full Name:</Label>
                    <Field
                      type='text'
                      id='fullName'
                      name='fullName'
                      className='form-control'
                      placeholder='Enter Full Name'
                      as={Input}
                    />
                    {errors.fullName && touched.fullName ? (
                      <div className='text-danger'>{errors.fullName}</div>
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor='username'>Username:</Label>
                    <Field
                      type='text'
                      id='username'
                      name='username'
                      className='form-control'
                      placeholder='Enter Username'
                      as={Input}
                    />
                    {errors.username && touched.username ? (
                      <div className='text-danger'>{errors.username}</div>
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor='email'>Email:</Label>
                    <Field
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Enter Email'
                      as={Input}
                    />
                    {errors.email && touched.email ? (
                      <div className='text-danger'>{errors.email}</div>
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor='password'>Password:</Label>
                    <Field
                      type='password'
                      id='password'
                      name='password'
                      className='form-control'
                      placeholder='Enter Password'
                      as={Input}
                    />
                    {errors.password && touched.password ? (
                      <div className='text-danger'>{errors.password}</div>
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor='confirmPassword'>Confirm Password:</Label>
                    <Field
                      type='password'
                      id='confirmPassword'
                      name='confirmPassword'
                      className='form-control'
                      placeholder='Enter Confirm Password'
                      as={Input}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div className='text-danger'>{errors.confirmPassword}</div>
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor='birthday'>Birthday:</Label>
                    <Field
                      type='date'
                      id='birthday'
                      name='birthday'
                      className='form-control'
                      as={Input}
                    />
                    {errors.birthday && touched.birthday ? (
                      <div className='text-danger'>{errors.birthday}</div>
                    ) : null}
                  </FormGroup>

                  <Button type='submit' color='primary' block>Register</Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default SignUp;
