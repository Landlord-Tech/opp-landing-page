import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import Icon from "../components/Icon"
import Seo from "../components/seo"

const Tenants = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "tenants" } }) {
        frontmatter {
          metaTitle
          metaDescription
          heroHeading
          heroText
          heroImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          heroBtn
          heroBtnUrl
          sec1Heading
          sec1Text
          sec1Img {
            childImageSharp {
              gatsbyImageData
            }
          }
          sec2Heading
          sec2Img {
            childImageSharp {
              gatsbyImageData
            }
          }
          sec2Btn
          sec2BtnUrl
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
    metaTitle,
    metaDescription,
    heroHeading,
    heroText,
    heroImg,
    heroBtn,
    heroBtnUrl,
    sec1Heading,
    sec1Text,
    sec1Img,
    sec2Heading,
    sec2Img,
    sec2Btn,
    sec2BtnUrl,
    sec2List,
  } = frontmatter

  return (
    <Layout className="landing">
      <Seo title={metaTitle} description={metaDescription} />
      <section className="hero">
        <GatsbyImage
          style={{
            gridArea: "1 / 1",
          }}
          alt={heroHeading}
          image={getImage(heroImg)}
          formats={["auto", "webp", "avif"]}
          objectPosition={"70%"}
          objectFit="cover"
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
          }}
        >
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="h1">{heroHeading}</h1>
                <p className="hero-text">{heroText}</p>
                <a
                  href={heroBtnUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg primary"
                >
                  {heroBtn}
                </a>
              </div>
              <button
                onClick={() => scrollTo("#scroll-here")}
                className="animated-mouse"
              >
                <Icon color="#fff" size={60} icon="scroll" />
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
              <GatsbyImage
                alt={sec1Heading}
                image={getImage(sec1Img)}
                formats={["AUTO", "WEBP", "AVIF"]}
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
                {sec2List.map((item, index) => {
                  return (
                    <li key={index}>
                      <Icon color="#fff" size={24} icon="check" />
                      {item.item}
                    </li>
                  )
                })}
              </ul>
              <a
                href={sec2BtnUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg secondary"
              >
                {sec2Btn}
              </a>
            </div>
            <div className="img">
              <GatsbyImage
                alt={sec2Heading}
                image={getImage(sec2Img)}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tenants
