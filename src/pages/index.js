import * as React from "react"
import { Link } from "gatsby"
import background from "../images/banner.jpg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {

  return (
    <Layout className="homepage">
      <Seo title="Home" />

      {/*banner*/}
      <section className="hero hero-page">
        <StaticImage
          style={{
            gridArea: "1 / 1"
          }}
          layout="fullWidth"
          // aspectRatio={2}
          alt=""
          src={"../images/banner.jpg"}
          formats={["auto", "webp", "avif"]}
          // objectPosition={"70%"}
          objectFit="cover"
          placeholder="blurred"
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid"
          }}
        >
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">Everything you need to succeed with pets in rentals</h1>
                <div>
                  <Link to="/landlords/" className="btn btn-lg primary-gradient">Landlords</Link>
                  <Link to="/tenants/" className="btn btn-lg secondary">Tenants</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
