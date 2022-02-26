import React from "react"

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Cadastro() {
  return (
    <div className="container">
      <h1 style={{ color: "#428349" }}>Cadastro</h1>
      <section className="form">
        <Container fluid>
          <Card className="cards">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome </Form.Label>
                <Form.Control type="text" placeholder="john doe" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail </Form.Label>
                <Form.Control type="email" placeholder="johndoe@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="senha" />
              </Form.Group>

              <Button type="submit">Cadastrar</Button>
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
      ></p>
    </div>
  )
}

export default Cadastro
