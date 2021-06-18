import React from "react"
import Layout from "../components/layout"
import { func } from "prop-types"

const ContactUs = () => {

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <Layout>
      <form name="contact" netlify >
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactUs
