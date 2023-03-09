import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Login() {
  //state
  //const [StateVariableName,setFunction] = useState(initialvalue)
  const [email,setEmail] = useState('admin@gmail.com')
  const [password,setPassword] = useState('admin')

  let submit = ()=>{
    alert('ok')
  }
  return (
          <Form>
            <Form.Group className="mb-4 mt-5 col-5 offset-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value = {email} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4 col-5 offset-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value = {password} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="button" className='col-5 offset-3' onClick={submit}>
              Submit
            </Button>
          </Form>
  )
}
