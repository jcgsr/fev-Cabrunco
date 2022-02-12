// Hoje, em 11 de fevereiro de 2020, em Rio de Janeiro, Brasil, fomos ao AquaRio.

import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"

import Carousel from "react-bootstrap/Carousel"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Marque Aqui</h1>
    <div className="carousel p-0">
      <Carousel>
        {data.slideShow.edges.map(({ node }) => (
          <Carousel.Item key={node.id}>
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={node.base.split("-").join(" ").split(".")[0]}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
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
