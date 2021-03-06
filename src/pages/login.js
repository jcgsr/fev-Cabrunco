import React, { useState } from "react"

import Layout from "../components/layout"

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Cadastro from "../components/register"

function Login() {
  const [show, setShow] = useState(false)
  const toggle = () => {
    setShow(!show)
  }
  return (
    <Layout className="login" id="login">
      <h1 style={{ color: "#428349" }}>Login</h1>
      <section className="form">
        <Container fluid>
          <Card className="cards">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail </Form.Label>
                <Form.Control type="email" placeholder="johndoe@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="senha" />
              </Form.Group>

              <Button type="submit">Login</Button>
            </Form>
          </Card>
        </Container>
      </section>
      <p
        style={{
          margin: "1rem auto",
          textAlign: "center",
          color: "#428349",
          fontWeight: "bold",
        }}
      >
        Não tem conta? Faça o{" "}
        <span
          style={{
            color: "#428349",
            fontWeight: "bold",
            textDecorationLine: "underline",
            cursor: "pointer",
          }}
          onClick={toggle}
        >
          cadastro
        </span>
        !
      </p>
      <hr />
      {show && <Cadastro />}
    </Layout>
  )
}

export default Login
