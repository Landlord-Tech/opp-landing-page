import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import FAQ from "../components/faq"

const data = [
  {
    question: "How long does it take to get set up?",
    answer: "If you have your property address information, tenant name and email, and a payment method, you can have your first contract sent to your tenant in 5 minutes or less."
  },
  {
    question: "Do you have an ESA letter verification process?",
    answer: "Yes, we have a state of the art ESA letter verification process that exposes fraudulent letters. We also include all state laws and penalties for fraudulent documentation in the contracts that the tenants read and sign."
  },
  {
    question: "Do I need this service if I have a “No Pets Policy”?",
    answer: "You would especially want this service if you have a “No Pets Policy”. With dozens of companies popping up online offering ESA Letters for as low as $29, the number of fraudulent ESA letters have skyrocketed this past year. More people are sneaking in pets as they are working from home and think they can conceal them better. There are instances where HUD will hire people to inquire about support animals and press a lawsuit if you are not following their rules exactly. We are here to help take on all of these burdens for you!"
  },
  {
    question: "Do you have pet policies for every state?",
    answer: "Our goal is to have policies for every state before the end of 2021. Currently supported states are Idaho, Utah, Montana, Nevada."
  },
  {
    question: "If my tenants have already signed a pet policy, can I implement this pet policy?",
    answer: "You can always let your tenants know you have decided to use our platform to help facilitate the pet policy and ask them to sign up. They have the right to decline. However, if they are asking to have an Emotional Support Animal, a Service Animal, or even if they have a visitor that wants to bring an animal onto the leased premises, you can let them know that you use our platform for those purposes and they would need to get approved before doing so. You can also customize your policy for your property ahead of time. When the new lease is ready to sign all you would have to do is enter the tenant name(s) and email/phone number and click send."
  }
]

const Pricing = () => {
  return (
    <Layout>
      <section className="small-hero">
        <div className="container">
          <div className="small-hero-content">
            <div className="small-hero-text">
              <h1 className="h1">Professional pet policy contracts in minutes</h1>
              <p>When it comes to pets, let us do the heavy lifting for as little as $5/month</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-list-section">
        <div className="container">
          <ul className="pricing-list-content">
            <li>
              <div>
                <h3 className="h3 primary title bold">Starter</h3>
                <h4 className="h4 sub-title secondary fw-medium">1-100 contracts</h4>
                <h4 className="h4 fw-medium"><strong className="h2 primary bold color-primary">$7/</strong>contract</h4>
                <p>per month</p>
              </div>
              <button className="btn btn-lg primary">Get started</button>
            </li>
            <li>
              <div>
                <h3 className="h3 primary title bold">Standard</h3>
                <h4 className="h4 sub-title secondary fw-medium">101-1000 contracts</h4>
                <h4 className="h4 fw-medium"><strong className="h2 primary bold color-primary">$6/</strong>contract</h4>
                <p>per month</p>
              </div>
              <button className="btn btn-lg primary">Get started</button>
            </li>
            <li>
              <div>
                <h3 className="h3 primary title bold">Enterprise</h3>
                <h4 className="h4 sub-title secondary fw-medium">>1,000 Contracts</h4>
                <h4 className="h4 fw-medium"><strong className="h2 primary bold color-primary">$5/</strong>contract</h4>
                <p>per month</p>
              </div>
              <button className="btn btn-lg primary">Get started</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="h2 text-center">Frequently Asked Questions</h2>
          <FAQ data={data} />
        </div>

      </section>
    </Layout>
  )
}

export default Pricing
