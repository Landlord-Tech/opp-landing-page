import React, { useEffect, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles/main.scss"
import { useLocation } from "@reach/router"
import scrollTo from "gatsby-plugin-smoothscroll"
import Icon from "./Icon"

const Layout = ({ children, className, prodHeader }) => {
  const { pathname } = useLocation()
  const [sticky, setSticky] = useState(false)
  const [scrollTop, setScrollTop] = useState(false)

  console.log(pathname)
  const redirectedPath1 =
    pathname === "/what-landlords-need-to-know-about-esas-in-2021/"
  const redirectedPath2 =
    pathname === "/the-landlords-guide-to-tenants-with-pets/"

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSticky(window.pageYOffset > 200)
        setScrollTop(window.pageYOffset > 600)
      })
    }
    if (redirectedPath1) {
      window.location =
        "https://resources.ourpetpolicy.com/what-landlords-need-to-know-about-esas-in-2021/"
    }
    if (redirectedPath2) {
      window.location =
        "https://resources.ourpetpolicy.com/the-landlords-guide-to-tenants-with-pets/"
    }
  }, [])

  return !redirectedPath1 && !redirectedPath2 ? (
    <>
      <Header pathname={pathname} sticky={sticky} prodHeader={prodHeader} />
      <main className={className} id="top">
        {children}
      </main>
      {!pathname.includes("/calculator") && <Footer />}

      <button
        onClick={() => scrollTo("#top")}
        className={`go-top-btn ${scrollTop ? "fade-in" : ""}`}
      >
        <Icon color="#0D0D0D" size={36} icon="arrow-top" />
      </button>
    </>
  ) : null
}

export default Layout
