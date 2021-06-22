import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import Icon from "../components/Icon"


const Tenants = () => {

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "landlords"}}) {
        frontmatter {
          title
          heroHeading
          heroText
          heroImg
          heroBtn
          sec1Heading
          sec1Text
          sec2Heading
          sec2Btn
          sec2List {
            item
          }
          sec5Btn
          sec5Title
        }
      }
    }
  `)

  const possibilitiesList = [
    "Customizable Contracts & Master Policies",
    "ESA Verification Process",
    "Electronic Signatures Service",
    "Easy-to-use Tenant Portal",
    "Contract Data Management System",
    "Violation Notification System",
    "Violation Notification System",
    "Application Processes for all Animal Requests",
    "Irrefutable Unauthorized Animal Policy"
  ]
  return (
    <Layout className="homepage">
      {/*<Seo title="Home" />*/}

      {/*banner*/}
      <section className="hero">
        <StaticImage
          style={{
            gridArea: "1 / 1"
          }}
          layout="fullWidth"
          // aspectRatio={2}
          alt=""
          src={"../images/homepage2.jpg"}
          formats={["auto", "webp", "avif"]}
          objectPosition={"70%"}
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
                <h1 className="h1">Easy Step-by-Step process for all of your animal's documentation</h1>
                <p className="hero-text">OurPetPolicy takes the guesswork out of your contract. You can review it, see
                  all application steps,
                  fees, instructions, and status all in one place.</p>
                <button className="btn btn-lg primary">Get started</button>
              </div>

              <button
                className="animated-mouse"
                onClick={() => scrollTo('#scroll-here')}
              >
                <Icon
                  color="#fff"
                  size={60}
                  icon="scroll"
                />
                <p>Scroll</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="img-text-section section" id='scroll-here'>
        <div className="container">
          <div className="img-text-content">
            <div className="img">
              <StaticImage
                src="../images/macbook.png"
                // width={300}
                // quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Why Choose OurPetPolicy?"
                placeholder="transparent"
              />
            </div>
            <div className="text">
              <h2 className="h2">Win-Win for you and your animal</h2>
              <p>Life is always better when everyone is on the same page. Through our portal all rules, expectations,
                and procedures are specifically outlined and follows all State and Federal Laws. This protects both you
                and your landlord.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="list-section section">
        <div className="container">
          <div className="list-content">
            <div className="list">
              <h2 className="h2">Pawsibilities Unleashed . . . </h2>
              <ul>
                {
                  possibilitiesList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Icon
                          color="#fff"
                          size={24}
                          icon="check"
                        />
                        {item}
                      </li>
                    )
                  })
                }
              </ul>
              <Link to={"/"} className="btn btn-lg secondary">Give it a try</Link>
            </div>
            <div className="img">
              <StaticImage
                src="../images/phones.png"
                // width={300}
                // quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Why Choose OurPetPolicy?"
                placeholder="transparent"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tenants
