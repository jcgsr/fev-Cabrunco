import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { motion } from "framer-motion"

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa"
const Parceiros = () => {
  return (
    <Container fluid className="gx-0">
      <section className="cards">
        <div className="parceiros">
          <h1 id="parceiro">Parceiros</h1>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title
                      style={{ color: "#428349", fontWeight: "bold" }}
                    >
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
              </motion.div>
            </Col>
            <Col>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title
                      style={{ color: "#428349", fontWeight: "bold" }}
                    >
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
              </motion.div>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title
                      style={{ color: "#428349", fontWeight: "bold" }}
                    >
                      EM Frei Cristóvão
                    </Card.Title>

                    <Card.Text style={{ color: "#428349" }}>
                      Melhor quadra coberta da cidade!
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
              </motion.div>
            </Col>
            <Col>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title
                      style={{ color: "#428349", fontWeight: "bold" }}
                    >
                      EM Argentina
                    </Card.Title>

                    <Card.Text style={{ color: "#428349" }}>
                      Melhor lugar para jogar no Açuzinho!
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
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </Container>
  )
}

export default Parceiros
