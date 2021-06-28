import React, { useState } from "react"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
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

/*  const handleSubmit = (event) => {
    console.log({ formState })
    fetch('https://ejb052f7f6.execute-api.us-west-2.amazonaws.com/Prod/email', {
      method: 'POST',
      body: JSON.stringify(formState)
    }).then(response => {
      console.log(response)
      return response.json();
    }).catch(error => console.log(error));

    event.preventDefault();
  }*/

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

  return (
    <div
      className='contact-form'>
      <h2 className="h2">Contact us</h2>
      <p>Use this form to contact us and we’ll get back to you ASAP!</p>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className='input-field'>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formState.name}
            placeholder="Full name"
          />
        </div>

        <div className='input-field'>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Email"
          />
        </div>

        <div className='input-field'>
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={formState.phone}
            placeholder="Phone"
          />
        </div>
        <div className='input-field'>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formState.message}
            placeholder="Message"
          />
        </div>

        <button
          className='btn btn-md primary min-130'
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>

  )
}

export default ContactForm
