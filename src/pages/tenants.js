import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import Icon from "../components/Icon"


const Tenants = () => {

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "tenants"}}) {
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
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const {
    heroHeading,
    heroText,
    heroImg,
    heroBtn,
    sec1Heading,
    sec1Text,
    sec2Heading,
    sec2Btn,
    sec2List
  } = frontmatter

  return (
    <Layout className="homepage">
      {/*<Seo title="Home" />*/}

      {/*banner*/}
      <section className="hero">
        <GatsbyImage
          style={{
            gridArea: "1 / 1"
          }}
          layout="fullWidth"
          // aspectRatio={2}
          alt=""
          src={heroImg}
          image={heroImg}
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
                <h1 className="h1">{heroHeading}</h1>
                <p className="hero-text">{heroText}</p>
                <button className="btn btn-lg primary">{heroBtn}</button>
              </div>
              <button
                onClick={() => scrollTo("#scroll-here")}
                className="animated-mouse"
              >
                <Icon
                  color="#fff"
                  size={60}
                  icon="scroll"
                />
                <p id="scroll-here">Scroll</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="img-text-section section">
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
              <h2 className="h2">{sec1Heading}</h2>
              <p>{sec1Text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="list-section section">
        <div className="container">
          <div className="list-content">
            <div className="list">
              <h2 className="h2">{sec2Heading}</h2>
              <ul>
                {
                  sec2List.map((item, index) => {
                    return (
                      <li key={index}>
                        <Icon
                          color="#fff"
                          size={24}
                          icon="check"
                        />
                        {item.item}
                      </li>
                    )
                  })
                }
              </ul>
              <Link to={"/"} className="btn btn-lg secondary">{sec2Btn}</Link>
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
