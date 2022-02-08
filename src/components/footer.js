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
            ContactItem
            icon
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { contactList } = frontmatter

  const location = contactList[0].ContactItem

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
            <h4>
              {location.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </h4>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={"/pricing/#faq"}>FAQ</Link>
            </h4>
            <h4 className="h4">
              <Link to={"/resources/"}>Resources</Link>
            </h4>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={"/contact-us/"}>Contact us</Link>
            </h4>
            <ul className="footer-contact">
              {contactList.slice(1, 3).map(({ ContactItem, icon }, index) => {
                return (
                  <li key={index}>
                    <Icon icon={icon} size={24} />
                    {ContactItem.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="footer-top-col">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/OurPetPolicy/"
              className="inline-block"
            >
              <Icon color="#fff" size={40} icon="fb" />
            </a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} OurPetPolicy. All rights reserved.{" "}
            <Link to="/terms-and-conditions" className="underline">
              Terms.
            </Link>{" "}
            <Link to="/privacy-policy" className="underline">
              Privacy.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
