import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa"
const Parceiros = () => {
  return (
    <Container fluid className="gx-0">
      <Row>
        <Col>
          <div className="parceiros">
            <h1 id="parceiro">Parceiros</h1>
            <section className="cards">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title style={{ color: "#428349", fontWeight: "bold" }}>
                    EMEP
                  </Card.Title>

                  <Card.Text style={{ color: "#428349" }}>
                    Vem jogar na melhor quadra do Brejo!
                  </Card.Text>
                  <Card.Link href="https://www.facebook.com/">
                    <FaFacebookSquare
                      style={{ color: "#428349", fontSize: "30px" }}
                    />
                  </Card.Link>
                  <Card.Link href="https://www.instagram.com/">
                    <FaInstagramSquare
                      style={{ color: "#428349", fontSize: "30px" }}
                    />
                  </Card.Link>
                  <Card.Link href="https://www.instagram.com/">
                    <FaWhatsappSquare
                      style={{ color: "#428349", fontSize: "30px" }}
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title style={{ color: "#428349", fontWeight: "bold" }}>
                    EM Luiza Pereira
                  </Card.Title>

                  <Card.Text style={{ color: "#428349" }}>
                    Melhor campo de areia do Loiola!
                  </Card.Text>
                  <Card.Link href="https://www.facebook.com/">
                    <FaFacebookSquare
                      style={{ color: "#428349", fontSize: "30px" }}
                    />
                  </Card.Link>
                  <Card.Link href="https://www.instagram.com/">
                    <FaInstagramSquare
                      style={{ color: "#428349", fontSize: "30px" }}
                    />
                  </Card.Link>
                  <Card.Link href="https://www.instagram.com/">
                    <FaWhatsappSquare
                      style={{ color: "#428349", fontSize: "30px" }}
                    />
                  </Card.Link>
                </Card.Body>
              </Card>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Parceiros
