import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Col, Button, Row, Container, Form, Card } from 'react-bootstrap';

export default function Login() {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e){
    e.preventDefault();
    try {
      let user = {
        username,
        password
      }
      let response = await axios.post("http://localhost:8000/movies/login", user)
      if (response) {
        // console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        alert(`Welcome ${user.username}!`)
        // setTimeout(()=>navigate("/"),1000)
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
                    Login
                  </h2>
                  <div className="mb-3">
                  <Form onSubmit={handleLogin}>              
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
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?
                        <a href="/signup" className="text-primary fw-bold">
                          Sign Up
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