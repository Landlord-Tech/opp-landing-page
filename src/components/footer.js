import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Icon from "./Icon"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "footer" } }) {
        frontmatter {
          col1List {
            addressList
            icon
          }
          col2Title
          col2TitleURL
          col2List {
            listItem
            listItemUrl
          }
          col3Title
          col3TitleURL
          col3List {
            listItem
            icon
            listItemUrl
          }
          col4Title
          col4TitleURL
          col4List {
            listItem
            listItemUrl
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const {
    col1List,
    col2Title,
    col2TitleURL,
    col2List,
    col3Title,
    col3TitleURL,
    col3List,
    col4Title,
    col4TitleURL,
    col4List,
  } = frontmatter

  const location = col1List[0].addressList

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
            <Icon icon={col1List[0].icon} size={24} />
            <h4>
              {location.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </h4>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={col2TitleURL}>{col2Title}</Link>
            </h4>
            {col2List.map(({ listItem, listItemUrl }, i) => {
              return (
                <h4 className="h4">
                  <Link to={listItemUrl}>{listItem}</Link>
                </h4>
              )
            })}
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              <Link to={col3TitleURL}>{col3Title}</Link>
            </h4>
            <ul className="footer-contact">
              {col3List.map(({ listItem, listItemUrl, icon }, index) => {
                return (
                  <li key={index}>
                    <Icon icon={icon} size={24} />
                    {listItemUrl ? (
                      <Link to={listItemUrl}>{listItem}</Link>
                    ) : (
                      <p key={index}>{listItem}</p>
                    )}
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="footer-top-col">
            <h4 className="h4">
              {col4TitleURL ? (
                <Link to={col4TitleURL}>{col4Title}</Link>
              ) : (
                <>{col4Title}</>
              )}
            </h4>
            {col4List.map(({ listItem, listItemUrl }) => {
              return (
                <h4 className="h4">
                  <Link to={listItemUrl}>{listItem}</Link>
                </h4>
              )
            })}
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
            © {new Date().getFullYear()} Landlord Tech Inc. All rights reserved.{" "}
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
