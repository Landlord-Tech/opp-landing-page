import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CalculatorSection from "../components/calculator/CalculatorSection"
import Icon from "../components/Icon"
import scrollTo from "gatsby-plugin-smoothscroll"

const Landlords = () => {

  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "homepage.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      markdownRemark(frontmatter: {title: {eq: "landlords"}}) {
        frontmatter {
          title
          heroHeading
          heroText
          heroImg
          heroBtn
          calculatorText
          calculatorHeading
          sec1Heading
          sec1Text
          sec2Card1Heading
          sec2Card1Text
          sec2Card2Heading
          sec2Card2Text
          sec2Card3Heading
          sec2Card3Text
          sec2Heading
          sec3Button
          sec4Heading
          sec3Text
          sec4Img
          sec4Text
          sec5List {
            item
          }
          sec5Btn
          sec5Heading
        }
      }
    }
  `)
  const { markdownRemark, file } = data;
  const { frontmatter } = markdownRemark;
  const { childImageSharp} = file;
  const { gatsbyImageData } = childImageSharp;

  const {
    heroHeading,
    heroText,
    heroImg,
    heroBtn,
    calculatorText,
    calculatorHeading,
    sec1Heading,
    sec1Text,
    sec2Heading,
    sec2Card1Heading,
    sec2Card1Text,
    sec2Card2Heading,
    sec2Card2Text,
    sec2Card3Heading,
    sec2Card3Text,
    sec3Text,
    sec3Button,
    sec4Heading,
    sec4Img,
    sec4Text,
    sec5List,
    sec5Btn,
    sec5Heading
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
          alt={heroHeading}
          image={gatsbyImageData}
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

      {/*calculator*/}
      <section className="section" id="scroll-here">
        <div className="container">
          <div className="title text-center">
            <h2 className="h2">{calculatorHeading}</h2>
            <p className="title-info">{calculatorText}</p>
          </div>
          <CalculatorSection />
        </div>
      </section>

      <section className="img-text-section section">
        <div className="container">
          <div className="img-text-content">
            <div className="img">
              <StaticImage
                src="../images/macbook.png"
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

      <section className="no-more-section section">
        <div className="container">
          <div className="title">
            <h2 className="h2">{sec2Heading}</h2>
          </div>
          <div className="no-more-content">
            <div className="no-more-item">
              <StaticImage
                src={"../images/hand.svg"}
                alt="rotate"
                placeholder="transparent"
              />
              <h4 className="h4">{sec2Card1Heading}</h4>
              <p>{sec2Card1Text}</p>
            </div>
            <div className="no-more-item">
              <StaticImage
                src={"../images/file.svg"}
                alt="rotate"
                placeholder="transparent"
              />
              <h4 className="h4">{sec2Card2Heading}</h4>
              <p>{sec2Card2Text}</p>
            </div>
            <div className="no-more-item">
              <StaticImage
                src={"../images/house.svg"}
                alt="rotate"
                placeholder="blurred"
              />
              <h4 className="h4">{sec2Card3Heading}</h4>
              <p>{sec2Card3Text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="thin-section section">
        <div className="container">
          <div className="thin-section-content">
            <p>{sec3Text}</p>
            <button className="btn primary btn-lg">{sec3Button}</button>
          </div>
        </div>
      </section>

      <section className="img-text-section section">
        <div className="container">
          <div className="img-text-content">
            <div className="img">
              <StaticImage
                src={'../images/dog-guilty.png'}
                placeholder="transparent"
                alt={sec4Heading}
              />
            </div>
            <div className="text">
              <h2 className="h2">{sec4Heading}</h2>
              <p>{sec4Text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="list-section section">
        <div className="container">
          <div className="list-content">
            <div className="list">
              <h2 className="h2">{sec5Heading}</h2>
              <ul>
                {
                  sec5List.map((item, index) => {
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
              <Link to={"/"} className="btn btn-lg secondary">{sec5Btn}</Link>
            </div>
            <div className="img">
              <StaticImage
                src="../images/phones.png"
                // width={300}
                // quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Why Choose OurPetPolicy?"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Landlords
