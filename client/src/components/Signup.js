import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Col, Button, Row, Container, Form } from 'react-bootstrap';


// Define a React component for user signup
export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle user sign up when form is submitted
  async function handleSignup(e) {
    e.preventDefault();
    try {
      let user = {
        username,
        password
      }
      console.log(user)

      // Send a post request to the server for user sign up
      let response = await axios.post("http://localhost:8000/movies/signup", user)
      if (response) {
        localStorage.setItem("token", response.data.token)
        alert(response.data.msg);
        
        // Redirect to homepage after successful signup
        setTimeout(()=>navigate("/") , 1000 ) 
      }
    } catch (error) {
      alert(error.response.data.msg) 
    }
  }




  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Sign Up
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSignup}>              
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label 
                        className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        autoComplete="email"
                        value={username}
                        onChange={(event)=>setUsername(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(event)=>(setPassword(event.target.value))}
                              />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?
                        <a href="/login" className="text-primary fw-bold">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
