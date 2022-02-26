// Hoje, em 11 de fevereiro de 2020, em Rio de Janeiro, Brasil, fomos ao AquaRio.

import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Parceiros from "../components/parceiros"

import "bootstrap/dist/css/bootstrap.min.css"

// bootstrap
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Container fluid>
      <Carousel className="carousel">
        {data.slideShow.edges.map(({ node }) => (
          <Carousel.Item key={node.id}>
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={node.base.split("-").join(" ").split(".")[0]}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/*  <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    </Container>
    <Parceiros />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    slideShow: allFile(filter: { relativeDirectory: { eq: "bg" } }) {
      edges {
        node {
          id
          relativePath
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              height: 600
              width: 1200
              quality: 70
              transformOptions: { cropFocus: CENTER, fit: COVER }
            )
          }
        }
      }
    }
  }
`
