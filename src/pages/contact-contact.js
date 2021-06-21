import React, { useState } from "react"
import Layout from "../components/layout"
const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: ""
  })
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));


    e.preventDefault();
  }



  console.log({ formState })
  return (
    <Layout>
      <form name="contact" onSubmit={handleSubmit} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name='name'
          onChange={handleChange}
          value={formState.name}
          placeholder='name'
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formState.email}
          placeholder='name'
        />
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  )
}

export default ContactUs
