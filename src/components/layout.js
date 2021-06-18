import React, { useEffect, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles/main.scss"
import { useLocation } from "@reach/router"
import scrollTo from "gatsby-plugin-smoothscroll"
import Icon from "./Icon"

const Layout = ({ children, className }) => {

  const { pathname } = useLocation()
  const [sticky, setSticky] = useState(false)
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
          setSticky(window.pageYOffset > 200)
          setScrollTop(window.pageYOffset > 600)
        }
      )
    }
  }, [])

  return (
    <>
      <Header pathname={pathname} sticky={sticky}/>
      <main className={className} id='top'>{children}</main>
      {
        !pathname.includes("/calculator") && <Footer />
      }

      <button
        onClick={() => scrollTo('#top')}
        className={`go-top-btn ${scrollTop ? 'fade-in' : ''}`}

      >
        <Icon
          color='#0D0D0D'
          size={36}
          icon='arrow-top'
        />
      </button>

    </>
  )
}

export default Layout
