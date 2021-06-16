import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import background from "../images/homepage2.jpg"


import Layout from "../components/layout"
import Icon from "../components/Icon"

const IndexPage = () => {

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
                <button className="btn btn-lg primary-gradient">Get started</button>
              </div>

              <div className="animated-mouse">
                <Icon
                  color="#fff"
                  size={60}
                  icon="scroll"
                />
                <p>Scroll</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="img-text-section home-section">
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

      <section className="no-more-section home-section">
        <div className="container">
          <div className="title">
            <h2 className="h2">No more hassle and potential legal disputes</h2>
          </div>
          <div className="no-more-content">
            <div className="no-more-item">
              <StaticImage
                src={"../images/hand.svg"}
                alt="rotate"
                placeholder="transparent"
              />
              <h4 className="h4">Damage Reduction</h4>
              <p>Our process reduces unauthorized pets, fraudulent ESAs, and educates tenants on the responsibilties
                required when renting with pets.</p>
            </div>
            <div className="no-more-item">
              <StaticImage
                src={"../images/file.svg"}
                alt="rotate"
                placeholder="transparent"
              />
              <h4 className="h4">Federal and State Compliance</h4>
              <p>Laws are always changing. OurPetPolicy takes care of the legal compliance, so that you don't have to.
                No loopholes, no worries.2</p>
            </div>
            <div className="no-more-item">
              <StaticImage
                src={"../images/house.svg"}
                alt="rotate"
                placeholder="transparent"
              />
              <h4 className="h4">Easy Management</h4>
              <p>Everything you need to manage your pet policies, signatures, and violations -- all in one place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="thin-section home-section">
        <div className="container">
          <div className="thin-section-content">
            <p>OurPetPolicy makes the process convenient and easy for you. Our process is vetted by lawyers in every
              state
              making sure you are covered under state and federal laws. </p>
            <button className="btn primary-gradient btn-lg">Get started</button>
          </div>
        </div>
      </section>

      <section className="img-text-section home-section">
        <div className="container">
          <div className="img-text-content">
            <div className="img">
              <StaticImage
                src="../images/dog-guilty.png"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Why Choose OurPetPolicy?"
                placeholder="transparent"
              />
            </div>
            <div className="text">
              <h2 className="h2">Why do I need a Pet Policy if I have a "No Pets Policy"?</h2>
              <p>The Federal Housing Administration allows a person with a disability that can get a letter from a
                qualified professional to have an animal in almost any rental, regardless of a "No Pets Policy".
                Millions of ESA (Emotional Support Animal) letters are faked every year. We have a thorough verification
                process that will expose these fake letters and keep unauthorized animals out of your rental!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="list-section home-section">
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

export default IndexPage
