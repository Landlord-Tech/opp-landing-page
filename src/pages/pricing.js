import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Faq from "../components/faq"

const Pricing = () => {

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "pricing"}}) {
        frontmatter {
          title
          heroHeading
          heroText
          pricingList {
            plan
            contracts
            price
            pricingBtn
            pricingBtnUrl
          }
          faqHeading
          faqList {
            question
            answer
          }
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const {
    title,
    heroHeading,
    heroText,
    pricingList,
    faqHeading,
    faqList,
  } = frontmatter
  return (
    <Layout>
      <section className="small-hero md">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">{heroHeading}</h1>
              <p>{heroText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-list-section">
        <div className="container">
          <ul className="pricing-list-content">
            {
              pricingList.map(({plan, contracts, price, pricingBtn, pricingBtnUrl}, index) => {
                return (
                  <li key={index}>
                    <div>
                      <h3 className="h3 primary title bold">{plan}</h3>
                      <h4 className="h4 sub-title secondary fw-medium">{contracts}</h4>
                      <h4 className="h4 fw-medium"><strong className="h2 primary bold color-primary">${price}/</strong>contract</h4>
                      <p>per month</p>
                    </div>
                    <a href={pricingBtnUrl} target="_blank" rel="noreferrer" className="btn btn-lg primary">{pricingBtn}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <h2 className="h2 text-center">{faqHeading}</h2>
          <Faq data={faqList} />
        </div>
      </section>
    </Layout>
  )
}

export default Pricing
