import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "contact" } }) {
        frontmatter {
          title
          heroHeading
          heroText
          sec1Heading
          contactList {
            contactField
            icon
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { contactList } = frontmatter

  console.log({ contactList });

  return (
    <footer className="footer">
      <div className="container">
        <Link className="logo" to={"/"}>
          <StaticImage
            src="../images/logo-white.svg"
            alt="OurPetPolicy"
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="transparent"
          />
        </Link>
        <ul className="footer-top">
          <li className="footer-top-col with-icon">
            <Icon icon={contactList[0].icon} size={24} />
            <h4>{contactList[0].contactField}</h4>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={"/landlords/"}>Landlords</Link>
            </h4>
            <h4 className="h4">
              <Link to={"/calculator-no-pets-allowed/"}>ROI calculator</Link>
            </h4>
            <h4 className="h4">
              <Link to={"/tenants/"}>Tenants</Link>
            </h4>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={"/pricing/"}>Pricing</Link>
            </h4>
            <h4 className="h4">
              <Link to={"/pricing/#faq"}>FAQ</Link>
            </h4>
            <h4 className="h4">
              <a href={"https://www.ourpetpolicy.com/resources/"}>Resources</a>
            </h4>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={"/contact-us/"}>Contact us</Link>
            </h4>
            <ul className="footer-contact">
              {contactList.slice(1, 3).map(({ contactField, icon }, index) => {
                return (
                  <li key={index}>
                    <Icon icon={icon} size={24} />
                    {contactField}
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="footer-top-col">
            <a
              href="https://www.facebook.com/OurPetPolicy/"
              className="inline-block"
            >
              <Icon color="#fff" size={40} icon="fb" />
            </a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} OurPetPolicy.{" "}
            <Link to="/terms-and-conditions">Terms.</Link>{" "}
            <Link to="/privacy-policy">Privacy.</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
